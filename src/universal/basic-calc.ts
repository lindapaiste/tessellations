import {I_GridLayout, I_Point, I_Rectangle, I_Sized} from "./types";

/**
 * classes can use these factories to implement default behaviors
 *
 * alternatively, could use inheritance
 * alternatively, could use composition with an internal square/basic grid to get outputs but modify them
 */


/**
 * basic getPlacement() assumes there are width # of items in each row
 */
export const makeGetPlacement = (obj: I_Sized): I_GridLayout["getPlacement"] =>
    (index: number): I_Point => ({
        y: Math.floor(index / obj.width),
        x: index % obj.width,
    });

/**
 * multiplies the grid-relative x/y from getPlacement() by the tileSize
 */
export const makeGetPixelPosition = (obj: Pick<I_GridLayout, 'tileSize' | 'getPlacement'>): I_GridLayout["getPixelPosition"] =>
    (index: number): I_Point => {
        return scalePlacement(obj.getPlacement(index), obj.tileSize);
    };

/**
 * uses the class' getPixelPosition() for x and y, so this factory
 * can be used anywhere where the the bounding rect is a square
 * with height and width both equal to tileSize
 */
export const makeGetBoundingRect = (obj: Pick<I_GridLayout, 'tileSize' | 'getPixelPosition'>): I_GridLayout["getBoundingRect"] =>
    (index: number): I_Rectangle => {
        const pos = obj.getPixelPosition(index);
        return {
            x: pos.x,
            y: pos.y,
            width: obj.tileSize,
            height: obj.tileSize,
        }
    }


export const scaleSize = (size: I_Sized, scale: number): I_Sized => {
    return {
        width: size.width * scale,
        height: size.height * scale,
    }
}

export const scalePlacement = (pos: I_Point, scale: number): I_Point => {
    return {
        x: pos.x * scale,
        y: pos.y * scale,
    }
}
