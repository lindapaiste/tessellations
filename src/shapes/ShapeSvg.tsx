import { Point } from "geometric";
import React from "react";
import { ShapeComponent, SvgShapeProps } from "./types";
import { ShapeName, resolveShape } from "./lookup";
import { Background } from "../background";
import { getShapeHeight } from "./util";

/**
 * Renders a single shape element onto an appropriately-sized viewBox
 * such that the shape touches all four sides of the viewBox.
 * Allows for rotation.
 */
export type Props = Omit<SvgShapeProps, "center"> & {
  shape: ShapeName | ShapeComponent;
};

export const ShapeSvg = ({ shape, ...props }: Props): JSX.Element => {
  const Component = resolveShape(shape);

  let { width } = props;
  let height;
  let center: Point;

  // Get bounding box based on center [0,0], but then need to shift the center when rendering
  if (Component.getBoundingBox) {
    const box = Component.getBoundingBox({ center: [0, 0], ...props });
    width = box.width;
    height = box.height;
    center = [-box.x, -box.y];
  } else {
    height = getShapeHeight(Component, props);
    center = [0.5 * width, 0.5 * height];
  }

  return (
    <Background width={width} height={height}>
      <Component {...props} center={center} />
    </Background>
  );
};
