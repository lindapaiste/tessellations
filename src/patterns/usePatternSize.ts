import { Size } from "../shapes";
import { useBackgroundSize } from "../background";

/**
 * Wrapper around useBackgroundSize() accesses the inferred size from the background,
 * but allows the pattern size to be overwritten with a width and a height from props.
 */
export const usePatternSize = (props?: Partial<Size>): Size => {
  const background = useBackgroundSize();
  return {
    width: props?.width ?? background.width,
    height: props?.height ?? background.height,
  };
};
