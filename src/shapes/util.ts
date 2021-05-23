import { Line, Point, polygonRotate } from "geometric";
import { CenteredShapeProps, ShapeComponent, Size, XYRectangle } from "./types";

/**
 * Convert an array of polygon points into a string
 * which can be used as the 'points' property of an SVG <polygon> element.
 * The SVG string uses a space between each point and a comma between x and y.
 */
export const polygonSvgString = (polygon: Point[]): string =>
  polygon.map((point) => point.join(",")).join(" ");

/**
 * Convert a rectangle or a size into an SVG viewBox string.
 * x and y are optional, but width and height are required.
 */
export const viewBoxSvgString = (rect: Size & Partial<XYRectangle>): string =>
  [rect.x || 0, rect.y || 0, rect.width, rect.height].join(" ");

/**
 * Translate a point based on an x and y value of the translation.
 */
export const translatePoint = ([x, y]: Point, [tX, tY]: Point): Point => [
  x + tX,
  y + tY,
];

/**
 * Translate a polygon based on an x and y value of the translation.
 * Note: geometric package has a polygon translate, but it is based on angle and distance
 * rather than x and y
 */
export const translateBy = (polygon: Point[], translation: Point): Point[] =>
  polygon.map((point) => translatePoint(point, translation));

/**
 * Apply a rotation to a polygon, or return the original polygon if the rotation is 0.
 */
export const maybeRotate = (
  polygon: Point[],
  rotate: number | undefined,
  origin: Point | undefined
): Point[] => (rotate ? polygonRotate(polygon, rotate, origin) : polygon);

/**
 * Resize a polygon based on the provided width and height ratios.
 * Must be centered at [0,0].
 *
 * TODO: update @types package for geometric to include defs for new polygonScaleX/Y functions
 */
export const resizePolygon = (
  shape: Point[],
  widthScale: number,
  heightScale: number
): Point[] => shape.map(([x, y]) => [x * widthScale, y * heightScale]);

/**
 * Helper takes a shape which is defined with width = 1, height = 1, center = [0,0]
 * and applies the actual width, height, center, and rotation.
 *
 * heightRatio creates a default height based on width if prop height is not set.
 *
 * TODO: apply skew
 */
export const applyPropsToShape = (
  shape: Point[],
  props: CenteredShapeProps,
  heightRatio: number
): Point[] => {
  const { width, rotate, center } = props;
  const height = props.height ?? width * heightRatio;
  const sized = resizePolygon(shape, width, height);
  const positioned = translateBy(sized, center);
  return maybeRotate(positioned, rotate, center);
};

/**
 * Combine applyPropsToShape and polygonSvgString into one.
 */
export const createPointsString = (
  shape: Point[],
  props: CenteredShapeProps,
  heightRatio: number
): string => polygonSvgString(applyPropsToShape(shape, props, heightRatio));

/**
 * Convert the two coordinates returned from geometric package polygonBounds() function to a
 * rectangle object with x, y, width, height.
 */
export const boundsToRect = ([topLeft, bottomRight]: Line): XYRectangle => {
  const [x, y] = topLeft;
  const [x2, y2] = bottomRight;
  return {
    x,
    y,
    width: x2 - x,
    height: y2 - y,
  };
};

/**
 * In the following order of preference:
 * 1. Return the explicitly defined height.
 * 2. Compute the height from the width based on the shape configuration.
 * 3. Return a height equal to the width.
 */
export const getShapeHeight = (
  Component: ShapeComponent,
  { height, width }: { width: number; height?: number }
) => height ?? Component.standardHeight?.(width) ?? width;
