import { createPolygonShape } from "./createPolygon";

export const Rhombus = createPolygonShape({
  /**
   * default height makes two equilateral triangles
   */
  heightRatio: Math.sqrt(3),
  /**
   * shape definitions are always centered at 0,0 with width and height of 1
   */
  shape: [
    [0, -0.5], // top
    [0.5, 0], // right
    [0, 0.5], // bottom
    [-0.5, 0], // left
  ],
});
