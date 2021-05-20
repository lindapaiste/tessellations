import React from "react";
import { ShapePattern, ShapePatternProps } from "patterns/patterns";
import { ShapeName } from "patterns/shapes";
import { EditableLayeredPattern } from "./EditableLayeredPattern";
import { randomColor } from "../../util/random";

/**
 * Clicking on a tile navigates to the editor with that tile's contents pre-loaded.
 *
 * Special case for a tile which has just one pattern.
 * Takes the pattern properties as props
 * rather than having a pattern element as a child.
 */
export const EditablePatternTile = (
  props: ShapePatternProps & { shape: ShapeName }
): JSX.Element => (
  <EditableLayeredPattern>
    <ShapePattern elementColor={randomColor()} {...props} />
  </EditableLayeredPattern>
);
