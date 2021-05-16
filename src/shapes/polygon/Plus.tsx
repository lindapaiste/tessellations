import { createPolygonShape } from "./createPolygon";
import { ShapeComponent } from "../types";

/**
 * Unlike other polygons, a plus sign can have varying thicknesses.
 * Factory function creates a ShapeComponent based on the thickness.
 */
export const makePlus = (thickness: number): ShapeComponent =>
  createPolygonShape({
    heightRatio: 1,
    shape: [
      [-0.5 * thickness, -0.5],
      [0.5 * thickness, -0.5],
      [0.5 * thickness, -0.5 * thickness],
      [0.5, -0.5 * thickness],
      [0.5, 0.5 * thickness],
      [0.5 * thickness, 0.5 * thickness],
      [0.5 * thickness, 0.5],
      [-0.5 * thickness, 0.5],
      [-0.5 * thickness, 0.5 * thickness],
      [-0.5, 0.5 * thickness],
      [-0.5, -0.5 * thickness],
      [-0.5 * thickness, -0.5 * thickness],
    ],
  });

/**
 * Standard plus sign has thickness equal to one third of the total width.
 */
export const Plus = makePlus(1 / 3);
