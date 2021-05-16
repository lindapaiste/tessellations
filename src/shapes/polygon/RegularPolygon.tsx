import { polygonBounds, polygonRegular } from "geometric";
import { boundsToRect, resizePolygon } from "../util";
import { createPolygonShape } from "./createPolygon";
import { ShapeComponent } from "../types";

/**
 * Use functions from geometric package to find the shape and heightRatio for a regular polygon
 * with any number of sides.
 *
 * Note: if the height is set then the polygon is no longer regular
 */
export const createRegularPolygon = (sides: number): ShapeComponent => {
  const initial = polygonRegular(sides, 1, [0, 0]);
  /**
   * height ratio is found by looking at the created regular polygon
   */
  const bounds = polygonBounds(initial);
  if (bounds === null) {
    throw new Error("polygon must have at least 3 sides");
  }
  const { width, height } = boundsToRect(bounds);
  const heightRatio = height / width;
  /**
   * The base shape should fill 1x1 square, so stretch it.
   * This will make it no longer regular if height ratio is anything other than 1.
   * resizePolygon method assumes the input is 1x1, so set the size to the inverse to get the
   * right output.
   */
  const shape = resizePolygon(initial, 1 / width, 1 / height);

  return createPolygonShape({
    heightRatio,
    shape,
  });
};

export const Square = createRegularPolygon(4);

export const Pentagon = createRegularPolygon(5);

export const Hexagon = createRegularPolygon(6);

export const Octagon = createRegularPolygon(8);
