import {I_GridLayout, I_GridMethods, I_GridProperties, I_Point, I_Rectangle, I_Sized} from "./types";
import {scalePlacement, scaleSize} from "./basic-calc";

/**
 * wraps a specific I_GridLayout instance,
 * thereby creating default behaviors for that class
 *
 * the BasicCalc methods should not call on other methods using this.method()
 * it should always call this.internal.method()
 * so that it relies on specific behavior of the internal over its own behavior
 */
export default class BasicCalc implements I_GridMethods {

    private readonly internal: I_GridLayout;

    constructor(internal: I_GridLayout) {
        this.internal = internal;
    }

    getCount(): number {
        return this.internal.width * this.internal.height;
    }

    getPlacement(index: number): I_Point {
        return {
            y: Math.floor(index / this.internal.width),
            x: index % this.internal.width,
        }
    }

    getGridSize(): I_Sized {
        return scaleSize(this.internal, this.internal.tileSize);
    }

    getPixelPosition(index: number): I_Point {
        return scalePlacement(this.internal.getPlacement(index), this.internal.tileSize);
    }

    getBoundingRect(index: number): I_Rectangle {
        return {
            ...this.internal.getPixelPosition(index),
            width: this.internal.tileSize,
            height: this.internal.tileSize,
        }
    }
}
