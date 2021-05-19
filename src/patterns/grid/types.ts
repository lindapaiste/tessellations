import { Point } from "geometric";
import { MaybeGenerate } from "../../util";
import { Size, SvgShapeProps } from "../../shapes";

export interface StandardLayout {
  /**
   * The name of a pre-defined layout type.
   */
  layout: "square" | "diagonal" | "triangular";
  /**
   * The horizontal spacing from one dot in a row to the next.
   * The vertical spacing will be calculated from this based on the layout.
   */
  spacing: number;
}

export type LayoutName = StandardLayout["layout"];

export interface GridSpacing {
  /**
   * The horizontal distance from the center of one element in a row to the next
   * for consistency between interfaces, just calling this 'spacing' rather than 'spacingInRow'
   */
  spacing: number;
  /**
   * The vertical distance from the center of one row to the next.
   */
  spacingBetweenRows: number;
  /**
   * The number of pixels to shift each row.
   * With each new row, move the elements to the right by this amount.
   * Default: 0.
   */
  stagger: number;
}

export type GridOptionalProps = {
  /**
   * Accept an optional topLeft Point to determine where to start to the grid
   * defaults to half of the row and between row spacings so that it doesn't touch the edge
   */
  start?: Point;
  /**
   * Can pass elementWidth and elementHeight so that the layout can include points where the center
   * is outside the boundaries of the tile, but an element with its center at that point with the
   * given size would have some portion visible on the tile.
   */
  elementWidth?: number;
  /**
   * Note: how do I get access to the elementHeight that was computed by the shape?
   */
  elementHeight?: number;
};

export type GridProps = GridSpacing & Size & GridOptionalProps;

/**
 * The props required to generate a points array.
 * Can be a custom layout or a standard one.
 *
 * Note: Should add & Size where needed instead of including Size here
 * because Omit<_, keyof Size> doesn't work correctly on a union.
 */
export type GetPointsProps = GridOptionalProps & (GridSpacing | StandardLayout);

export interface PatternProps {
  elementColor?: string;
  elementWidth: number;
  elementHeight?: number;
  /**
   * can optionally pass through extra props to each element
   * these can be dependent on the index and location
   * width/height/fill here will override the default
   */
  elementProps?: MaybeGenerate<
    Partial<SvgShapeProps>,
    { index: number; center: Point }
  >;
}
