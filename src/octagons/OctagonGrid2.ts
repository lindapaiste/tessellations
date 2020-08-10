import {I_GetSvg, I_GridLayout, I_GridProperties, I_Point, I_Rectangle, I_Sized} from "../universal/types";
import {scalePlacement} from "../universal/basic-calc";
import {DIAMOND_POINTS, OCTAGON_POINTS, sideForWidth} from "./points";
import {isEven} from "../lib";
import {Polygon} from "geometric";

/**
 * an octagon grid alternates between rows or regular octagons
 * and rows of diamonds aka squares rotated by 45 degrees
 *
 * defined such that the top row is octagons
 * and there are no diamonds sticking out on any side
 * therefore diamond rows have 1 less entry than the octagon rows
 */
export default class OctagonGrid implements I_GetSvg, I_GridLayout {

    public width: number;

    public height: number;

    /**
     * tileSize refers to the size of the octagons
     * the squares are much smaller
     */
    public tileSize: number;

    constructor(props: I_GridProperties) {
        this.height = props.height;
        this.width = props.width;
        this.tileSize = props.tileSize;
    }

    /**
     * the tile size refers to the bounding box size for an octagon
     * but can use this to calculate the length of each side
     */
    sideLength(): number {
        return sideForWidth(this.tileSize);
    }

    /**
     * calculate the bounding box for the diamonds
     */
    diamondWidth(): number {
        return 2 * this.sideLength() / Math.sqrt(2);
    }

    /**
     * in each column, if the octagon starts at position 0,
     * then the diamond is to the right by this amount
     */
    diamondOffset(): number {
        return this.tileSize - .5 * this.diamondWidth();
    }

    /**
     * odd rows are squares which have one less element than the even octagon rows
     */
    rowWidth(y: number) {
        return isEven(y) ? this.width : this.width - 1;
    }

    /**
     * need to account for squares which are not hanging off the side
     */
    getCount(): number {
        const missingSquares = Math.floor(this.height / 2);
        return this.width * this.height - missingSquares;
    }

    /**
     * can't just divide by rows because of the differing width,
     * but can divide by pairs of rows as a pair is constant
     * each pair of rows has width + width - 1 items
     * can determine what pair we are in and go from there
     */
    getPlacement(index: number): I_Point {
        const perPair = 2 * this.width - 1;
        const pair = Math.floor(index / perPair);
        const remainder = index % perPair;
        const y = remainder > this.width ? pair * 2 + 1 : pair * 2;
        const x = remainder % this.width;
        return {
            y,
            x,
        }
    }

    /**
     * simple helper checks shape for a row y
     * this is actually longer than writing isEven(), but it's more descriptive semantically
     */
    isOctagonRow(y: number): boolean {
        return isEven(y);
    }


    /**
     * to get the shape for each index,
     * need to get placement and then check that placement row
     */
    isOctagon(index: number): boolean {
        const placement = this.getPlacement(index);
        return this.isOctagonRow(placement.y);
    }

    /**
     * grid size is mostly based on the octagon size
     * designed such that squares won't cause any overflow to the right,
     * but they may cause bottom overflow depending on the height
     * except on this bottom row, squares add zero height
     */
    getGridSize(): I_Sized {
        const width = this.width * this.tileSize;
        let height = Math.ceil(this.height / 2) * this.tileSize;
        if (this.height % 2 === 0) {
            height += .5 * this.diamondWidth();
        }
        return {
            width,
            height
        }
    }

    cumulativeHeight(rows: number): number {
        //add one tile side for every octagon
        let height = Math.ceil(rows / 2) * this.tileSize;
        //add one half diamond height if ending on a diamond
        if (rows % 2 === 0) {
            height += .5 * this.diamondWidth();
        }
        return  height;
    }

    getPixelPosition(index: number): I_Point {
        const placement = this.getPlacement(index);
        if ( this.isOctagonRow(placement.y) ) {
            return {
                x: placement.x * this.tileSize,
                y: ( placement.y / 2 ) * this.tileSize,
            }
        } else {
            console.log( "offset", this.diamondOffset() );
            return {
                x: placement.x * this.tileSize + this.diamondOffset(),
                y: this.cumulativeHeight(placement.y + 1 ) - this.diamondWidth(),
            }
        }
    }

    getBoundingRect(index: number): I_Rectangle {
        const isOctagon = this.isOctagon(index);
        return {
            ...this.getPixelPosition(index),
            width: isOctagon ? this.tileSize : this.diamondWidth(),
            height: isOctagon ? this.tileSize : this.diamondWidth(),
        }
    }

    getPolygonPoints(index: number): Polygon {
        return this.isOctagon(index) ? OCTAGON_POINTS : DIAMOND_POINTS;
    }

}
