import React, { ComponentType } from "react";
import { ShapeComponent, SvgShapeProps } from "../types";

/**
 * Helper applies the standard height BEFORE calling the render function
 */
export const createShape = (
  Render: ComponentType<SvgShapeProps & { height: number }>,
  standardHeight: (width: number) => number
) => {
  const Component: ShapeComponent = ({ height, ...props }) => (
    <Render {...props} height={height ?? standardHeight(props.width)} />
  );
  Component.standardHeight = standardHeight;
  return Component;
};
