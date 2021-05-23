import * as Shapes from "./shapes";
import { ShapeComponent } from "./types";

/**
 * The lowercase names of all pre-defined shapes.
 */
export type ShapeName = Lowercase<keyof typeof Shapes>;

/**
 * Lookup a shape component by its name.
 * Expects the name to be lowercase, but is actually case-insensitive right now.
 * (Subject to change in the future).
 */
export const componentByName = (name: ShapeName): ShapeComponent => {
  const found = Object.entries(Shapes).find(
    ([key]) => key.toLowerCase() === name.toLowerCase()
  );
  if (!found) {
    throw new Error(
      `Invalid shape name ${name}. Name must be one of ${Object.keys(Shapes)
        .map((s) => s.toLowerCase())
        .join(", ")}.`
    );
  }
  return found[1];
};

/**
 * Handle a prop which might be either a shape name or a component.
 */
export const resolveShape = (
  shape: ShapeName | ShapeComponent
): ShapeComponent =>
  typeof shape === "string" ? componentByName(shape) : shape;

/**
 * An array with the names of all shapes in alphabetical order
 */
export const shapeNames = [
  ...Object.keys(Shapes).map((s) => s.toLowerCase()),
].sort() as ShapeName[];
