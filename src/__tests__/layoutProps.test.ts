import { applyLayoutProps } from "../patterns/grid/mapProps";

describe("Grid Layout Props", () => {
  it("Can include spacingInRow and stagger based on a layout name", () => {
    const square = applyLayoutProps({
      layout: "square",
      spacing: 100,
    });
    expect(square.spacing).toBe(100);
    expect(square.spacingBetweenRows).toBe(100);
    expect(square.stagger).toBe(0);

    const diagonal = applyLayoutProps({
      layout: "diagonal",
      spacing: 100,
    });
    expect(diagonal.spacing).toBe(100);
    expect(diagonal.spacingBetweenRows).toBe(50);
    expect(diagonal.stagger).toBe(50);

    const triangular = applyLayoutProps({
      layout: "triangular",
      spacing: 100,
    });
    expect(triangular.spacing).toBe(100);
    expect(triangular.spacingBetweenRows).toEqual(50 * Math.sqrt(3));
    expect(triangular.stagger).toBe(50);
  });

  it("Prefers passed props over calculated props", () => {
    const triangular = applyLayoutProps({
      layout: "triangular",
      spacing: 100,
      spacingBetweenRows: 10,
    });
    expect(triangular.spacingBetweenRows).toBe(10);
  });
});
