import {boundsToRect, sizeShape} from "../util";
import {polygonBounds, polygonRegular} from "geometric";
import {createPolygonShape} from "./createPolygon";

/**
 * use functions from geometric package to find the shape and heightRatio for a regular polygon with any number of sides
 *
 * note: if the height is set then the polygon is no longer regular
 */
export const createRegularPolygon = (sides: number) => {
    const initial = polygonRegular(sides, 1, [0, 0]);
    /**
     * height ratio is found by looking at the created regular polygon
     */
    const bounds = polygonBounds(initial);
    if (bounds === null) {
        throw new Error("polygon must have at least 3 sides");
    }
    const {width, height} = boundsToRect(bounds);
    const heightRatio = height / width;
    /**
     * shape should fill 1x1 square, so stretch it -- which will make it no longer regular if height ratio is anything
     * other than 1
     * sizeShape method assumes the input is 1x1, so set the size to the inverse to get the right output
     */
    const shape = sizeShape(initial, 1 / width, 1 / height);

    return createPolygonShape({
        heightRatio,
        shape,
    })
};


export const Square = createRegularPolygon(4);

export const Pentagon = createRegularPolygon(5);

export const Hexagon = createRegularPolygon(6);

export const Octagon = createRegularPolygon(8);