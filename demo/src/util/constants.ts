import { layoutNames } from "patterns/patterns/grid/standardLayouts";
import { shapeNames } from "patterns/shapes";

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
export const SHAPE_NAMES = shapeNames;

/**
 * An array with the names of all layouts in alphabetical order
 */
export const LAYOUTS = layoutNames;
