import { Point } from "geometric";
import { GridPlacements } from "../patterns/grid/GridPlacements";
import { GridProps } from "../patterns";

describe("GridPlacements", () => {
  // easy set of args with no rounding issues
  const props: GridProps = {
    height: 100,
    width: 100,
    start: [10, 10],
    spacing: 25,
    spacingBetweenRows: 50,
    stagger: 0,
    elementHeight: 0,
    elementWidth: 0,
  };

  it("Validates props", () => {
    expect(
      new GridPlacements({
        ...props,
        spacing: 0,
      })
    ).toThrow();
  });

  const pointMatches = (a: Point) => (b: Point) =>
    a[0] === b[0] && a[1] === b[1];
  /**
   * Helper makes sure that all points are included,
   * but isn't concerned with unnecessary extras.
   */
  const containsAll = (points: Point[], required: Point[]): boolean => {
    return required.every((a) => points.find(pointMatches(a)) !== undefined);
  };

  it("Creates center points based on spacing values", () => {
    const grid = new GridPlacements(props);
    // check that the first row increments x by 25
    expect(
      containsAll(grid.getRow(0), [
        [10, 10],
        [35, 10],
        [60, 10],
        [85, 10],
      ])
    ).toBeTruthy();
    // check that the second row increments y by 50 and doesn't stagger
    expect(grid.rows[1][0][0]).toBe(10);
    expect(grid.rows[1][0][1]).toBe(60);
    // should have rows at y's 10 and 60 only, 110 is out of bounds
    expect(grid.rows.length).toBe(2);
  });

  it("Contains off-grid points depending on the elementWidth and elementHeight", () => {
    // use the same grid as before, but add elementWidth = 40 & elementHeight = 40
    const grid = new GridPlacements({
      ...props,
      elementWidth: 40,
      elementHeight: 40,
    });
    // first row now includes x = -15 and x = 110
    const firstRow = grid.getRow(0);
    expect(firstRow).toHaveLength(6);
    expect(firstRow[0][0]).toBe(-15);
    expect(firstRow[5][0]).toBe(110);
    // the y value for the first row is still 10
    expect(firstRow[0][1]).toBe(10);
    // y values are 10, 60, 110
    expect(grid.rows).toHaveLength(3);
    expect(grid.rows[2][0][1]).toBe(110);

    // troublesome hexagon grid from demos
    const hexGrid = new GridPlacements({
      elementWidth: 100,
      spacing: 150,
      spacingBetweenRows: 43,
      stagger: 75,
      start: [75, 22.5], // used default of [.5 * spacing, .5 * spacingBetweenRows]
      width: 300,
      height: 300,
    });
    expect(hexGrid.getRow(0)).toHaveLength(3);
    expect(hexGrid.getRow(1)).toHaveLength(2);
    expect(hexGrid.getRow(2)).toHaveLength(3);
    /* [
          [ [ 0, -20.5 ], [ 150, -20.5 ], [ 300, -20.5 ] ],
          [ [ 75, 22.5 ], [ 225, 22.5 ] ],
          [ [ 0, 65.5 ], [ 150, 65.5 ], [ 300, 65.5 ] ],
          [ [ 75, 108.5 ], [ 225, 108.5 ] ],
          [ [ 0, 151.5 ], [ 150, 151.5 ], [ 300, 151.5 ] ],
          [ [ 75, 194.5 ], [ 225, 194.5 ] ],
          [ [ 0, 237.5 ], [ 150, 237.5 ], [ 300, 237.5 ] ],
          [ [ 75, 280.5 ], [ 225, 280.5 ] ]
        ] */
  });
});
