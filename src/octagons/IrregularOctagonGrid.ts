import {I_GetSvg, I_GridMethods, I_Point, I_Rectangle, I_Sized} from "../universal/types";
import {isEven, last} from "../lib";
import {Polygon} from "geometric";

/**
 * make life easy by making sizing immutable
 * therefore can calculate everything at one time and just use methods to retrieve it
 * this reduces recalculation as many methods need to the same derived values
 */

/**
 * it is expected that diamond sizes are less than or equal to octagon sizes,
 * will act weird if greater
 * if diamondHeight === octagonHeight or diamondWidth === octagonWidth, becomes hexagons and diamonds
 * if all four sizes are equal, becomes all 45 degree rotated squares
 */

export interface Sizing {
    octagonWidth: number;
    octagonHeight: number;
    diamondWidth: number;
    diamondHeight: number;
}

export interface Props extends Sizing, I_Sized {

}

interface Stored {
    isOctagon: boolean;
    placement: I_Point;
    boundingRect: I_Rectangle;
}

export default class IrregularOctagonGrid implements I_GetSvg, I_GridMethods {

    public readonly width: number;
    public readonly height: number;
    public readonly octagonWidth: number;
    public readonly octagonHeight: number;
    public readonly diamondWidth: number;
    public readonly diamondHeight: number;
    public readonly shapes: Stored[];
    public readonly diamondPoints: Polygon;
    public readonly octagonPoints: Polygon;
    public readonly diamondViewBox: I_Sized;
    public readonly octagonViewBox: I_Sized;

    constructor(props: Props) {
        this.octagonWidth = props.octagonWidth;
        this.octagonHeight = props.octagonHeight;
        this.diamondWidth = props.diamondWidth;
        this.diamondHeight = props.diamondHeight;
        this.width = props.width;
        this.height = props.height;
        this.shapes = [];

        /**
         * store svg properties
         */
        this.diamondPoints = this.calcDiamondPoints();
        this.octagonPoints = this.calcOctagonPoints();
        this.diamondViewBox = {
            width: this.diamondWidth,
            height: this.diamondHeight
        };
        this.octagonViewBox = {
            width: this.octagonWidth,
            height: this.octagonHeight,
        }


        /**
         * loop through each row and column and store the shape
         */

        /**
         * in each column, if the octagon starts at position 0,
         * then the diamond is to the right by this amount
         */
        const diamondOffset = this.octagonWidth - .5 * this.diamondWidth;

        for (let row = 0, offsetY = 0; row < this.height; row++) {
            const isOctagon = isEven(row);
            /**
             * odd rows are squares which have one less element than the even octagon rows
             */
            const columnCount = isOctagon ? this.width : this.width - 1;
            for (let column = 0, offsetX = 0; column < columnCount; column++) {
                this.shapes.push({
                    isOctagon,
                    placement: {
                        x: column,
                        y: row,
                    },
                    boundingRect: {
                        x: column * this.octagonWidth + (isOctagon ? 0 : diamondOffset),
                        y: offsetY,
                        width: isOctagon ? this.octagonWidth : this.diamondWidth,
                        height: isOctagon ? this.octagonHeight : this.diamondHeight,
                    }
                });
            }
            //increment row height
            if (isOctagon) {
                offsetY += this.octagonHeight - .5 * this.diamondHeight;
            } else {
                offsetY += .5 * this.diamondHeight;
            }
        }
    }

    /**
     * easier to compute in real size and then scale appropriately
     */
    private calcDiamondPoints(): Polygon {
        return [
            [.5 * this.diamondWidth, 0], //top
            [this.diamondWidth, .5 * this.diamondHeight], //right
            [.5 * this.diamondWidth, this.diamondHeight], //bottom
            [0, .5 * this.diamondHeight], //left
        ]
    }

    private calcOctagonPoints(): Polygon {

        /**
         * since each value appear twice, it is more DRY and more readable
         * to calculate each individual value first and then create the pairs
         */
        const x = [
            0,
            .5 * this.diamondWidth,
            this.octagonWidth - .5 * this.diamondWidth,
            this.octagonWidth,
        ];

        const y = [
            0,
            .5 * this.diamondHeight,
            this.octagonHeight - .5 * this.diamondHeight,
            this.octagonHeight,
        ];

        return [
            //top
            [x[1], y[0]],
            [x[2], y[0]],
            //right
            [x[3], y[1]],
            [x[3], y[2]],
            //bottom
            [x[2], y[3]],
            [x[1], y[3]],
            //left
            [x[0], y[2]],
            [x[0], y[1]],
        ]
    }

    getCount(): number {
        return this.shapes.length;
    }

    getPlacement(index: number): I_Point {
        return this.shapes[index].placement;
    }

    isOctagon(index: number): boolean {
        return this.shapes[index].isOctagon;
    }

    /**
     * grid width is based purely on the octagon size
     * designed such that squares won't cause any overflow to the right,
     * but they may cause bottom overflow depending on the height
     * so get the height by looking at the last shape
     */
    getGridSize(): I_Sized {
        const lastShape = last(this.shapes);
        return {
            width: this.width * this.octagonWidth,
            height: lastShape.boundingRect.y + lastShape.boundingRect.height,
        }
    }

    getPixelPosition(index: number): I_Point {
        return this.shapes[index].boundingRect;
    }

    getBoundingRect(index: number): I_Rectangle {
        return this.shapes[index].boundingRect;
    }

    getPolygonPoints(index: number): Polygon {
        return this.isOctagon(index) ? this.octagonPoints : this.diamondPoints;
    }

    getViewBox(index: number): I_Sized {
        return this.isOctagon(index) ? this.octagonViewBox : this.diamondViewBox;
    }
}
