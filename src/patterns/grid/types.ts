import {Point} from "geometric";

export interface Size {
    width: number;
    height: number;
}

export interface XYRectangle extends Size {
    x: number;
    y: number;
}

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

export type LayoutName = StandardLayout['layout'];

export interface GridSpacing {
    /**
     * horizontal distance from one dot in a row to the next
     * for consistency between interfaces, just calling this "spacing" rather than "spacingInRow"
     */
    spacing: number;
    /**
     * vertical distance from one row to the next
     */
    spacingBetweenRows: number;
    /**
     * with each new row, move the dots to the right by this amount
     */
    stagger: number;
}

export type GridProps = GridSpacing & Size & {
    /**
     * accept an optional topLeft Point to determine where to start to the grid
     * defaults to half of the row and between row spacings so that it doesn't touch the edge
     */
    start?: Point;
    /**
     * can pass elementWidth and elementHeight so that the layout can include points where the center is outside the
     * boundaries of the tile, but an element with its center at that point with the given size would have some portion
     * visible on the tile
     */
    elementWidth?: number;
    /**
     * how do I get access to the elementHeight that was computed by the shape?
     */
    elementHeight?: number;
};

/**
 * The props required to generate a points array.
 * Can be a custom layout or a standard one.
 */
export type GetPointsProps = GridProps | (StandardLayout & Omit<GridProps, keyof GridSpacing>);