import React from "react";
import { maybeRotate } from "../util";
import { createShape } from "./createShape";

/**
 * Standard Capsule is a horizontal pill shape.
 * Semi-circles on either end and a square in between.
 *
 * Instead of stretching like with most shapes, keep the arcs
 * as semi-circles always and just change the width of the rectangle.
 */

// TODO: bounding box
export const Capsule = createShape(
  ({ width, height, center, rotate, ...props }) => {
    const [cx, cy] = center;
    const r = 0.5 * height;
    /**
     * The four points which need to be rotated are the four
     * corners of the central rectangle.
     */
    const [topLeft, topRight, bottomLeft, bottomRight] = maybeRotate(
      [
        [cx - 0.5 * width + r, cy - 0.5 * height],
        [cx + 0.5 * width - r, cy - 0.5 * height],
        [cx - 0.5 * width + r, cy + 0.5 * height],
        [cx + 0.5 * width - r, cy + 0.5 * height],
      ],
      rotate,
      center
    );

    return (
      <path
        {...props}
        d={`M ${topLeft} 
      L ${topRight} 
      A ${r} ${r} 0 0 1 
      ${bottomRight} 
      L ${bottomLeft}
      A ${r} ${r} 0 1 1 
      ${topLeft} 
      Z`}
      />
    );
  },
  (width) => 0.5 * width
  /**
   * Bounding box is not exact due to curves.
   * Base it on the four rectangle corners and the two endpoints
   * on the edge of the semi-circle
   */
);
