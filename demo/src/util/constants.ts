import * as Shapes from "patterns/shapes/shapes";
import { ShapeName } from "patterns/shapes";
import { LayoutName } from "patterns/patterns";

/**
 * In order to avoid circular dependencies from links,
 * the path mapping needs to be defined separately from the
 * screen component mapping.
 */
export enum PATHS {
  EDITOR = "/",
  EXAMPLES = "/examples",
}

/**
 * Current example tile size is a 300x300px square.
 */
export const EXAMPLE_SIZE = 300;

/**
 * An array with the names of all shapes in alphabetical order
 */
export const SHAPE_NAMES = [
  ...Object.keys(Shapes).map((s) => s.toLowerCase()),
].sort() as ShapeName[];

/**
 * An array with the names of all layouts
 */
export const LAYOUTS: LayoutName[] = ["diagonal", "square", "triangular"];
