import { ShapeName, componentByName } from "patterns/shapes";
import { random, sample } from "lodash";
import { LayoutName } from "patterns/patterns";
import chroma from "chroma-js";
import { EXAMPLE_SIZE, LAYOUTS, SHAPE_NAMES } from "./constants";
import { PatternSchema } from "../state/types";

/**
 * Create a single random color
 */
export const randomColor = (): string => chroma.random().hex();

/**
 * Create an array of random colors
 */
export const randomHexes = (count: number): string[] => {
  return Array.from({ length: count }, randomColor);
};

/**
 * Get a random shape name
 */
export const randomShape = (): ShapeName => sample(SHAPE_NAMES) as ShapeName;

/**
 * Get a random layout name
 */
export const randomLayout = (): LayoutName => sample(LAYOUTS) as LayoutName;

/**
 * Create a new editor layer filled with random values
 * Optionally uses the tile width as a basis for random number sizes
 */
export const randomLayer = (tileWidth = EXAMPLE_SIZE): PatternSchema => {
  const width = random(0.05 * tileWidth, 0.3 * tileWidth);

  // set the standard height rather than letting it be inferred
  const shape = randomShape();
  const Component = componentByName(shape);
  const height = Component.standardHeight?.(width) ?? width;

  // want there to be no overlap, so make sure that spacing is greater than width
  const spacing = random(width, 0.4 * tileWidth);

  return {
    type: "pattern",
    shape,
    layout: {
      layout: randomLayout(),
      spacing,
    },
    elementProps: {
      width,
      height,
      fill: randomColor(),
      strokeWidth: 0,
      stroke: randomColor(),
    },
  };
};
