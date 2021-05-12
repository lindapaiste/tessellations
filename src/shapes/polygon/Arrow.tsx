import {createPolygonShape} from "./createPolygon";
import {translateBy} from "../util";

export const Arrow = createPolygonShape({
    heightRatio: 1,
    /**
     * The basis shape is defined here, as a right-pointing arrow in viewBox of size 1
     * points go clockwise around the arrow.
     * Is translated to be centered at [0,0]
     */
    shape: translateBy([
            // starting from the top left of the stem
            [0, .25],
            // to the right along stem
            [.5, .25],
            // up to corner of point
            [.5, 0],
            // down and right to tip of point
            [1, .5],
            // down and left to bottom tip of point
            [.5, 1],
            // up to stem
            [.5, .75],
            // left along stem
            [0, .75],
            // goes vertical to close
        ],
        [-.5, -.5])
});
