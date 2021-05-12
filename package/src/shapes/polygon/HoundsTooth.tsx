import {createPolygonShape} from "./createPolygon";
import {polygonScale} from "geometric";
import {translateBy} from "../util";

/**
 * note: the center of the square is not the center of the shape because the tails are longer than the heads
 * writing points from top left [0,0] and scale of 5 to make life easier and then shifting
 */
export const HoundsTooth = createPolygonShape({
    heightRatio: 1,
    shape: translateBy(polygonScale(
        [[0, 3], [2, 1], [3, 1], [4, 0], [4, 1], [5, 1], [4, 2], [4, 3], [2, 5], [2, 4], [3, 3], [2, 3], [2, 2], [1, 3]],
        .2, [0, 0]),
        [-.5, -.5]
    )
});

/**
 * an alternative houndstooth design with more a a plus-sign shape
 */
export const HoundsCross = createPolygonShape({
    heightRatio: 1,
    shape: translateBy(polygonScale(
        [[0, 1], [2, 1], [2, 0], [3, 0], [3, 2], [4, 2], [4, 3], [2, 3], [2, 4], [1, 4], [1, 2], [0, 2]],
        .25, [0, 0]),
        [-.5, -.5]
    )
})
