import {polygonRegular, Polygon} from "geometric";

export const DIAMOND_POINTS: Polygon = [
    [0,.5],
    [.5,0],
    [1, .5],
    [.5, 1]
]

/**
 * given the total width of an octagon, get the side length
 */
export const sideForWidth = (width: number): number => {
    return width * Math.sqrt(2) / ( 2 + Math.sqrt(2) );
}

const side = Math.sqrt(2) / ( 2 + Math.sqrt(2) );

const area = 2 * side; //only true for this case

/**
 * the ratio of the diamond bounding rect width to the octagon is 1 : 2/sqrt(2)
 */

const diamondWidth = side / Math.sqrt(2);

/**
 * compute the diamond width that corresponds to a regular octagon of the given width
 */
export const diamondForOctagon = (octWidth: number): number => {
    return 2 * sideForWidth(octWidth) / Math.sqrt(2);
}

export const OCTAGON_POINTS: Polygon = polygonRegular(8, area, [.5,.5] );
