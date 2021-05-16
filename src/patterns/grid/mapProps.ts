import { Point } from "geometric";
import {
  GetPointsPropsWithSize,
  GridProps,
  GridSpacing,
  StandardLayout,
} from "./types";
import { GridPlacements } from "./GridPlacements";
import { getLayoutSpacing } from "./standardLayouts";

/**
 * Need to make sure that the key is present an also not undefined.
 */
const isStandardLayout = (
  props: StandardLayout | GridSpacing
): props is StandardLayout => "layout" in props && !!props.layout;

/**
 * Function which can accept either an object of custom spacing props, or an object with
 * a standard layout number and a single spacing value.
 */
export const eitherToSpacing = (
  props: StandardLayout | GridSpacing
): GridSpacing => (isStandardLayout(props) ? getLayoutSpacing(props) : props);

/**
 * When adding props from the layout, override the calculated with any explicitly passed.
 */
export const applyLayoutProps = (props: GetPointsPropsWithSize): GridProps => ({
  ...eitherToSpacing(props),
  ...props,
});

/**
 * if also passing in width and height, then can create and use the GridPlacements object externally
 */
export const eitherToPoints = (props: GetPointsPropsWithSize): Point[] => {
  const grid = new GridPlacements(applyLayoutProps(props));
  return grid.getPoints();
};
