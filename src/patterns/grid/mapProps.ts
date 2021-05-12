import {GetPointsProps, GridSpacing, StandardLayout} from "./types";
import GridPlacements from "./GridPlacements";
import {Point} from "geometric";
import {getLayoutSpacing} from "./standardLayouts";

/**
 * function which can accept either an object of custom spacing props, or an object with a standard layout number and a
 * single spacing value
 */
export const eitherToSpacing = (props: StandardLayout | GridSpacing): GridSpacing => {
    if ("layout" in props) {
        return getLayoutSpacing(props);
    } else {
        return props;
    }
};

/**
 * if also passing in width and height, then can create and use the GridPlacements object externally
 */
export const eitherToPoints = (props: GetPointsProps): Point[] => {
    const grid = new GridPlacements({
        ...props,
        ...eitherToSpacing(props),
    });
    return grid.getPoints();
}
