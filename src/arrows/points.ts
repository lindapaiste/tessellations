import * as geometric from "geometric";
import {Direction, PointTuple} from "../universal/types";
import {polygonSvgString} from "../universal/svg/util";
import {Polygon} from "geometric";

/**
 * can make this more abstract later
 * right now just need to switch left and right
 * can scale to viewBox size, or just use viewBox size = 1
 */
export const getPointsString = (viewBoxSize: number, direction: Direction = "right") => {
    let points = ARROW_POINTS;
    //haven't scaled yet so rotate around center which is [.5, .5]
    points = geometric.polygonRotate(points, directionRotation(direction, INITIAL_DIRECTION), [.5, .5]);
    //scale from [0,0]
    points = geometric.polygonScale(points, viewBoxSize, [0, 0]);
    return polygonSvgString(points);
}

/**
 * simple version uses viewBox = 1, just supports left and right
 */
export const simpleGetPolygon = (direction: "left" | "right") => {
    return direction === "right" ? ARROW_POINTS : geometric.polygonRotate(ARROW_POINTS, 180, [.5, .5]);
}

/**
 * the basis shape is defined here, as a right-pointing arrow in viewbox of size 1
 * points go clockwise around the arrow
 */
const ARROW_POINTS: Polygon = [
    //starting from the top left of the stem
    [0, .25],
    //to the right along stem
    [.5, .25],
    //up to corner of point
    [.5, 0],
    //down and right to tip of point
    [1, .5],
    //down and left to bottom tip of point
    [.5, 1],
    //up to stem
    [.5, .75],
    //left along stem
    [0, .75],
    //goes vertical to close
];

/**
 * constant defines that the direction for the above coordinates is "right"
 */
const INITIAL_DIRECTION: Direction = "right";

/**
 * converts direction string to numbers, where "up" is
 */
export const directionToDegrees = (direction: Direction): number => {
    switch (direction) {
        case "right":
            return 90;
        case "left":
            return 270;
        case "down":
            return 180;
        case "up":
            return 0;
    }
}

/**
 * find the change in degrees from the initial direction to the current direction
 */
export const directionRotation = (direction: Direction, initial: Direction): number => {
    return directionToDegrees(direction) - directionToDegrees(initial);
}
