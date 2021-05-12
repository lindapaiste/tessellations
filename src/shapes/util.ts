import {CenteredShapeProps, SizeOrRect} from "./types";
import {Point, polygonRotate} from "geometric";
import {XYRectangle} from "../patterns";

/**
 * svg string uses a space between each point and a comma between x and y
 */
export const polygonSvgString = (polygon: Point[]): string => {
    return polygon.map(point => point.join(",")).join(" ");
}

/**
 * convert a rectangle or size into a viewBox string
 */
export const viewBoxSvgString = (rect: SizeOrRect): string => {
    return [rect.x || 0, rect.y || 0, rect.width, rect.height].join(" ");
}

/**
 * geometric package has a polygon translate, but it is based on angle and distance rather than x and y
 */
export const translateBy = (polygon: Point[], translation: Point): Point[] => {
    return polygon.map(point => translatePoint(point, translation));
}

export const translatePoint = ([x, y]: Point, [tX, tY]: Point): Point => {
    return [x + tX, y + tY];
}

export const maybeRotate = (polygon: Point[], rotate: number | undefined, origin: Point | undefined): Point[] => {
    return rotate ? polygonRotate(polygon, rotate, origin) : polygon;
}

/**
 * apply width to x value and height to y value
 */
export const stretchPoint = ([x, y]: Point, width: number, height: number): Point => {
    return [x * width, y * height];
}
export const sizeShape = (shape: Point[], width: number, height: number): Point[] => {
    return shape.map(point => stretchPoint(point, width, height));
}

/**
 * helper takes a shape which is defined with width = 1, height = 1, center = [0,0]
 * and applies the actual width, height, center, and rotation.
 *
 * heightRatio creates a default height based on width if prop height is not set
 *
 * not doing anything about skew just yet
 */
export const applyPropsToShape = (shape: Point[], props: CenteredShapeProps, heightRatio: number): Point[] => {
    const {width, rotate, center} = props;
    const height = props.height ?? (width * heightRatio);
    const sized = sizeShape(shape, width, height);
    const positioned = translateBy(sized, center);
    return maybeRotate(positioned, rotate, center);
}

/**
 * combine applyPropsToShape and polygonSvgString into one
 */
export const createPointsString = (shape: Point[], props: CenteredShapeProps, heightRatio: number): string => {
    return polygonSvgString(
        applyPropsToShape(shape, props, heightRatio)
    );
}

/**
 * convert the two coordinates returned from geometric package polygonBounds function to a rectangle object
 */
export const boundsToRect = ([topLeft, bottomRight]: [Point, Point]): XYRectangle => {
    const [x, y] = topLeft;
    const [x2, y2] = bottomRight;
    return {
        x,
        y,
        width: x2 - x,
        height: y2 - y,
    }
};
