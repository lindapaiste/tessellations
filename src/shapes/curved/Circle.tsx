import React from "react";
import { createShape } from "./createShape";

/**
 * Implement Circle with <ellipse> rather than <circle>
 * so that the shape is circular by default,
 * but custom height arguments are not ignored.
 */
export const Circle = createShape(
  ({ width, height, center, ...props }) => (
    <ellipse
      {...props}
      cx={center[0]}
      cy={center[1]}
      rx={0.5 * width}
      ry={0.5 * height}
    />
  ),
  (width) => width
);
