import {createPolygonShape} from "./createPolygon";

/**
 * Unlike other polygons, a plus sign can have varying thicknesses.
 * Factory function creates a ShapeComponent based on the thickness.
 */
export const makePlus = (thickness: number) => createPolygonShape({
    heightRatio: 1,
    shape: [
        [-.5 * thickness, -.5],
        [.5 * thickness, -.5],
        [.5 * thickness, -.5 * thickness],
        [.5, -.5 * thickness],
        [.5, .5 * thickness],
        [.5 * thickness, .5 * thickness],
        [.5 * thickness, .5],
        [-.5 * thickness, .5],
        [-.5 * thickness, .5 * thickness],
        [-.5, .5 * thickness],
        [-.5, -.5 * thickness],
        [-.5 * thickness, -.5 * thickness],
    ]
});

/**
 * Standard plus sign has thickness equal to one third of the total width.
 */
export const Plus = makePlus(1/3);
