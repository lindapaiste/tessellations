import {GridProps, GridSpacing, Size} from "./types";
import {Point} from "geometric";

/**
 * Get the points for placing polka dots or other shapes onto a rectangular canvas
 *
 * Handles a layout where the dots can be placed into horizontal rows
 *
 * by varying the arguments, this class can handle:
 * - standard square grid
 * - diagonal square grid
 * - equilateral triangle grid
 *
 * Note: This doesn't really need to be a class, but making it a class with the props saved as class properties
 * makes it easy to break the construction up into little pieces without having to pass around lots of variables.
 *
 * Note: there will will be rounding errors when dealing with decimal amounts
 */
export default class GridPlacements implements GridSpacing, Size {

    private readonly epsilon = 0.00001;

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
     * a 2D array of element center points for each row.
     */
    public readonly rows: Point[][];

    constructor(props: GridProps) {
        const {spacing, spacingBetweenRows, stagger = 0, width, height, start, elementHeight, elementWidth} = props;
        // prevent infinite loops from invalid props
        if ( spacing <= 0 || spacingBetweenRows <=0 ) {
            throw new Error("Spacing must be a positive number. The spacing is measured from the center of each shape to the next. For perfectly-aligned shapes, set spacing to the elementWidth and spacingBetweenRows to the elementHeight.");
        }
        this.rows = [];
        this.spacing = spacing;
        this.spacingBetweenRows = spacingBetweenRows;
        this.stagger = stagger;
        this.width = width;
        this.height = height;
        this.elementWidth = elementWidth ?? spacing;
        this.elementHeight = elementHeight ?? spacingBetweenRows;

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
            point = this._nextRowPoint(point, false);
        }

        /**
         * then move down
         */
        point = this._nextRowPoint(startPoint);
        while (point[1] <= this.height + .5 * this.elementHeight) {
            this.rows.push(this._makeRow(point));
            point = this._nextRowPoint(point);
        }
    }

    /**
     * Take the given point and add more points until the row is full.
     */
    private _makeRow = (initial: Point): Point[] => {
        // The array of center points.
        const row: Point[] = [];
        // Make sure that we start with the first.
        // All points use the same y value as the initial point.
        // The x value gets incremented with each point.
        let [x, y] = this._firstPointInRow(initial);
        // Note: prone to rounding errors if x is exactly equal to width,
        // so include an arbitrary small epsilon
        while (x <= this.width + .5 * this.elementWidth + this.epsilon) {
            row.push([x, y]);
            x += this.spacing;
        }
        return row;
    }

    /**
     * Given an xy point, return the first point in that row.
     * Want the furthest left point which has any visible overlap with the canvas,
     * so the point itself might be outside of the canvas.
     */
    private _firstPointInRow = (point: Point): Point => {
        let [x, y] = point;
        x = x % this.spacing;
        while (x > -.5 * this.elementWidth) {
            x -= this.spacing;
        }
        // Note: could check for unnecessary off-canvas points if stagger is negative, but expectation is a positive number.
        return [x, y];
    }


    /**
     * Take a point from one row and make it into a point from the next row
     * by incrementing y and adding stagger to x.
     */
    private _nextRowPoint = (point: Point, down: boolean = true): Point => {
        const [prevX, prevY] = point;
        const y = prevY + this.spacingBetweenRows * (down ? 1 : -1);
        const x = prevX + this.stagger * (down ? 1 : -1);
        return [x, y];
    }

    /**
     * Get a flat array of all points.
     * These points are the center points of the elements.
     */
    public getPoints = (): Point[] => {
        return this.rows.flat();
    }


    /**
     * Get the array of points for a single row.
     */
    public getRow = (i: number): Point[] => {
        return this.rows[i];
    }

}
