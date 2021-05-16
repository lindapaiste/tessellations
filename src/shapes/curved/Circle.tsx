import React from "react";
import { ShapeComponent } from "../types";

export const Circle: ShapeComponent = ({ width, center, ...props }) => (
  <circle {...props} cx={center[0]} cy={center[1]} r={0.5 * width} />
);
Circle.standardHeight = (width) => width;
