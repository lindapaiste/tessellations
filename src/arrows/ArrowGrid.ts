import {Direction, I_GetSvg, I_GridLayout, I_Point, I_Rectangle, I_Sized, PropTileSize} from "../universal/types";
import {makeGetBoundingRect, makeGetPlacement} from "../universal/basic-calc";
import {isEven, isOdd} from "../lib";
import {Polygon} from "geometric";
import {simpleGetPolygon} from "./points";

export interface Props extends I_Sized, PropTileSize {
    initialDirection?: "left" | "right";
}

/**
 * the grid width and height are defined such that a row is the row of arrows all going in one direction
 * the arrows below going in the opposite direction are defined as a separate row
 *
 * designed such that the furthest left and right are arrow heads rather than stems if starting with a left row
 * can start with either left or right facing arrows on the top row
 */
export default class ArrowGrid implements I_GridLayout, I_GetSvg {

    public width: number;

    public height: number;

    public tileSize: number;

    public initialDirection: "left" | "right";

    constructor(props: Props) {
        this.height = props.height;
        this.width = props.width;
        this.tileSize = props.tileSize;
        this.initialDirection = props.initialDirection || "left";
    }

    get length(): number {
        return this.height * this.width;
    }

    getCount(): number {
        return this.height * this.width;
    }

    /**
     * because of alternating, the width includes an extra one half tileSize
     * because of stacking, each additional row only adds one half tile size to the height rather than one
     */
    getGridSize(): I_Sized {
        return {
            width: this.tileSize * (this.width + .5),
            height: this.tileSize * .5 * (this.height + 1),
        }
    }

    getPlacement = makeGetPlacement(this);

    /**
     * the x position depends on whether the arrow is facing left or right
     * left arrows get an extra half tile size added to the x
     * y position is only half of what it would be in a square grid due to stacking
     */
    getPixelPosition(index: number): I_Point {
        const placement = this.getPlacement(index);
        return {
            y: this.tileSize * .5 * placement.y,
            x: this.tileSize * ( this.isLeftRow(placement.y) ? placement.x : placement.x + .5 ),
        }
    }

    isLeftStart(): boolean {
        return this.initialDirection === "left";
    }

    isLeftRow(y: number): boolean {
        return isEven(y) ? this.isLeftStart() : ! this.isLeftStart();
    }

    getBoundingRect = makeGetBoundingRect(this);

    /**
     * render function needs to know the direction of the color at position i
     */
    getDirection(index: number): "left" | "right" {
        return this.isLeftRow( this.getPlacement(index).y ) ? "left" : "right";
    }

    getPolygonPoints(index: number): Polygon {
        return simpleGetPolygon(this.getDirection(index));
    }
}
