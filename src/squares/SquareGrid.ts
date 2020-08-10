import {I_GridLayout, I_GridProperties, I_Point, I_Rectangle, I_Sized} from "../universal/types";
import {scalePlacement, scaleSize} from "../universal/basic-calc";

export default class SquareGrid implements I_GridLayout {

    public width: number;

    public height: number;

    public tileSize: number;

    constructor(props: I_GridProperties) {
        this.height = props.height;
        this.width = props.width;
        this.tileSize = props.tileSize;
    }

    getCount(): number {
        return this.width * this.height;
    }

    getPlacement(index: number): I_Point {
        return {
            y: Math.floor(index / this.width),
            x: index % this.width,
        }
    }

    getGridSize(): I_Sized {
        return scaleSize(this, this.tileSize);
    }

    getPixelPosition(index: number): I_Point {
        return scalePlacement(this.getPlacement(index), this.tileSize);
    }

    getBoundingRect(index: number): I_Rectangle {
        return {
            ...this.getPixelPosition(index),
            width: this.tileSize,
            height: this.tileSize,
        }
    }
}
