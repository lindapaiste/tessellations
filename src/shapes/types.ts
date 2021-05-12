import {XYRectangle, Size} from "../patterns";
import {Point} from "geometric";
import {SVGAttributes} from "react";

/**
 * width and height required but position optional
 */
export type SizeOrRect = Partial<XYRectangle> & Size;

export interface CenteredShapeProps {
    /**
     * The [x,y] center of the bounding box.
     */
    center: Point;
    /**
     * The width is required for every shape.
     */
    width: number;
    /**
     * The height is optional. If not provided, it will be calculated from the width
     * based on the ratio defined by the shape.
     */
    height?: number;
    /**
     * Degrees of rotation to apply to the shape.
     */
    rotate?: number;
    /**
     * Skew translation to apply.
     */
    skew?: number;
    /**
     * Color of the shape.
     */
    fill?: string;
}

/**
 * An SVG shape accepts all of the above props plus the standard HTML props of an <svg> element.
 */
export type SvgShapeProps = CenteredShapeProps & SVGAttributes<any>;

/**
 * Component to render the shape from a standard set of props.
 * Adds optional additional properties.
 */
export type ShapeComponent = {
    (props: SvgShapeProps): JSX.Element | null;
    /**
     * Method to find the default height (or inherent height, for circles etc.) based on the width.
     */
    standardHeight?(elementWidth: number): number;

    /**
     * [Optional] Get the stagger between rows, for example for bricks.
     */
    getStagger?(props: { elementWidth: number, elementHeight: number, spacing: number }): number;

    // standard tiling layout??
}