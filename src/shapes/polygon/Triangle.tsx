import { Point } from "geometric";
import { createPolygonShape } from "./createPolygon";

/**
 * Define the three sides of a triangle by properties height, width, skew. Redefining the
 * interface here for documentation purposes, even though it is the same as other shapes.
 */
export interface TriangleProps {
  /**
   * one side of the triangle is on the bottom and the third vertex points up
   * width defines the length of the bottom base
   */
  width: number;
  /**
   * height refers to the distance from the base to the top vertex
   * defaults to width * sqrt(3)/2 which is the height of an equilateral triangle
   */
  height?: number;
  /**
   * skew determines whether the top vertex is centered over the base or shifted towards either side
   * defaults to 0 for an isosceles triangle
   */
  skew?: number;
  /**
   * center is the point whose x value is at half of the width and whose y is at half of the height
   * it is NOT the geometrical center of the triangle
   */
  center: Point;
  /**
   * defaults to 0, meaning one side of the triangle will always be horizontal.
   */
  rotate?: number;
}

export const Triangle = createPolygonShape({
  /**
   * Standard heightRatio creates an equilateral triangle
   */
  heightRatio: Math.sqrt(3) / 2,
  /**
   * shape definition fills the viewBox and has height=1, width=1
   */
  shape: [
    [0, -0.5], // top center
    [-0.5, 0.5], // bottom left
    [0.5, 0.5], // bottom right
  ],
});
