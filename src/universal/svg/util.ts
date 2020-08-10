import {PointTuple} from "../types";
import {SizeOrRect} from "./types";

/**
 * svg string uses a space between each point and a comma between x and y
 */
export const polygonSvgString = (polygon: PointTuple[]): string => {
    return polygon.map(point => point.join(",")).join(" ");
}
/**
 * convert a rectangle or size into a viewBox string
 */
export const viewBoxSvgString = (rect: SizeOrRect): string => {
    return [rect.x || 0, rect.y || 0, rect.width, rect.height].join(" ");
}
