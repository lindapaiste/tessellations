import {GridProps, GridSpacing, Size} from "./types";
import {Point} from "geometric";

/**
 * get the points for placing polka dots or other shapes onto a rectangular canvas
 *
 * handles a layout where the dots can be placed into horizontal rows
 *
 * by varying the arguments, this class can handle:
 * - standard square grid
 * - diagonal square grid
 * - equilateral triangle grid
 *
 * this doesn't really need to be a class, but making it a class with the props saved as class properties makes it easy
 * to break the construction up into little pieces without having to pass around lots of variables.
 *
 * note: there will will be rounding errors when dealing with decimal amounts
 */
export default class GridPlacements implements GridSpacing, Size {

    /**
     * stored props
     */
    public readonly spacing: number;
    public readonly spacingBetweenRows: number;
    public readonly stagger: number;
    public readonly width: number;
    public readonly height: number;
    public readonly elementWidth: number;
    public readonly elementHeight: number;

    /**
     * created data
     */
    public readonly rows: Point[][];

    constructor(props: GridProps) {
        const {spacing, spacingBetweenRows, stagger, width, height, start, elementHeight = 0, elementWidth = 0} = props;
        this.rows = [];
        this.spacing = spacing;
        this.spacingBetweenRows = spacingBetweenRows;
        this.stagger = stagger;
        this.width = width;
        this.height = height;
        this.elementHeight = elementHeight;
        this.elementWidth = elementWidth;

        /**
         * rather than starting from the top left and moving down, start from an arbitrary point and move both up and down
         * this allows for off-grid (partial shape) points to be included on the top and left sides
         */

        /**
         * start at the pre-defined start point or a calculated one
         */
        let startPoint = start || [.5 * spacing, .5 * spacingBetweenRows];

        /**
         * create and store all rows
         * first move up
         */
        let point = startPoint;
        while (point[1] >= -.5 * this.elementHeight) {
            this.rows.unshift(this._makeRow(point));
            point = this._nextRowFirst(point, false);
        }

        /**
         * then move down
         */
        point = this._nextRowFirst(startPoint);
        while (point[1] <= this.height + .5 * this.elementHeight) {
            this.rows.push(this._makeRow(point));
            point = this._nextRowFirst(point);
        }
    }

    /**
     * take the first point and add more points until the row is full
     */
    private _makeRow = (first: Point): Point[] => {
        let row: Point[] = [];
        let [x, y] = first;
        while (x <= this.width + .5 * this.elementWidth) { //note: prone to rounding errors if x is exactly equal to width
            row.push([x, y]);
            x += this.spacing;
        }
        return row;
    }

    /**
     * take the start point from one row and make it into the next row start by incrementing y and adding stagger to x,
     * while making sure that it hasn't been staggered so much that another dot goes before it
     */
    private _nextRowFirst = (point: Point, down: boolean = true): Point => {
        const [prevX, prevY] = point;
        const y = prevY + this.spacingBetweenRows * (down ? 1 : -1);
        let x = prevX + this.stagger * (down ? 1 : -1);
        x = x % this.spacing;
        if (x > -.5 * this.elementWidth) {
            x -= this.spacing;
        }
        return [x, y];
    }

    /**
     * return a flat array of all points
     */
    public getPoints = (): Point[] => {
        return this.rows.flat();
    }

    public getRow = (i: number): Point[] => {
        return this.rows[i];
    }

}
