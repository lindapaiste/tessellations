import { ShapeName } from "patterns/shapes";
import { LayoutName, ShapePatternProps } from "patterns/patterns";
import { PatternSchema } from "../editor/types";

/**
 * Convert back and forth between the props of a ShapePattern component
 * and the PatternSchema used by redux.
 */

export const patternPropsToSchema = (
  props: ShapePatternProps & { shape: ShapeName }
): PatternSchema => {
  return {
    shape: props.shape,
    type: "pattern",
    layout: {
      // needs some sort of type assertion because it is not understood
      // that one branch of the union must be true.
      layout: props.layout as LayoutName,
      // pattern uses the width if no value set
      spacing: props.spacing || props.elementWidth,
      spacingBetweenRows: props.spacingBetweenRows,
      stagger: props.stagger,
      start: props.start,
    },
    elementProps: {
      width: props.elementWidth,
      height: props.elementHeight,
      fill: props.elementColor,
      ...props.elementProps,
    },
  };
};

export const schemaToPatternProps = ({
  shape,
  layout,
  elementProps,
}: Omit<PatternSchema, "type">): ShapePatternProps => {
  const { width, height, fill, ...rest } = elementProps;
  return {
    shape,
    ...layout,
    elementWidth: width,
    elementHeight: height,
    elementColor: fill,
    elementProps: rest,
  };
};
