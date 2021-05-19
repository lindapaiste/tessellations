import { Point } from "geometric";
import { Size } from "../../shapes";
import {
  GetPointsProps,
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
 * Set these each individually instead of spreading in case the props includes keys
 * with values that are `undefined`.
 */
export const applyLayoutProps = <T>(
  props: T & GetPointsProps & Partial<GridProps>
): GridSpacing & Omit<T, keyof GridSpacing> => {
  const computed = eitherToSpacing(props);
  return {
    ...props,
    spacing: props.spacing ?? computed.spacing,
    spacingBetweenRows: props.spacingBetweenRows ?? computed.spacingBetweenRows,
    stagger: props.stagger ?? computed.stagger,
  };
};
/**
 * if also passing in width and height, then can create and use the GridPlacements object externally
 */
export const eitherToPoints = (props: GetPointsProps & Size): Point[] => {
  const grid = new GridPlacements(applyLayoutProps(props));
  return grid.getPoints();
};
