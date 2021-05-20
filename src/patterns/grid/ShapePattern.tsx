import React from "react";
import { GridProps, GridSpacing, PatternProps, StandardLayout } from "./types";
import { ShapeComponent, ShapeName, Size, resolveShape } from "../../shapes";
import { Pattern } from "./BasePattern";
import { getLayoutSpacing } from "./standardLayouts";
import { resolveProp } from "../../util";

/**
 * Create a grid-based pattern from any shape.
 */

export type ShapePatternProps = Partial<Size> &
  PatternProps &
  Partial<GridProps> &
  Partial<StandardLayout> & {
    /**
     * Can provide a custom shape render component, or the string name of a pre-defined shape.
     */
    shape: ShapeComponent | ShapeName;
  };

export const ShapePattern = ({
  shape,
  elementWidth,
  elementColor,
  elementProps,
  ...props
}: ShapePatternProps): JSX.Element => {
  /**
   * Handle string shape props.
   */
  const Shape = resolveShape(shape);

  /**
   * resolve height based on shape standard
   */
  const elementHeight =
    props.elementHeight ?? Shape.standardHeight?.(elementWidth) ?? elementWidth;

  /**
   * resolve layout spacing based on a combination of passed in arguments and shape defaults
   */
  const spacing = props.spacing ?? elementWidth;

  const fromLayout: Partial<GridSpacing> = props.layout
    ? getLayoutSpacing({ spacing, layout: props.layout })
    : {};

  const stagger =
    props.stagger ??
    fromLayout.stagger ??
    Shape.getStagger?.({ elementWidth, elementHeight, spacing }) ??
    0;

  const spacingBetweenRows =
    props.spacingBetweenRows ?? fromLayout.spacingBetweenRows ?? elementHeight;

  return (
    <Pattern
      {...props} // passes through the start point
      // want to make sure that elementHeight from shape is passed down
      elementWidth={elementWidth}
      elementHeight={elementHeight}
      spacing={spacing}
      spacingBetweenRows={spacingBetweenRows}
      stagger={stagger}
      Element={Shape}
      elementProps={(args) => ({
        fill: elementColor,
        width: elementWidth,
        height: elementHeight,
        ...resolveProp(elementProps, args),
      })}
    />
  );
};
