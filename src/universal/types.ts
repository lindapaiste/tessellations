import {Polygon} from "geometric";

export interface I_Point {
    x: number;
    y: number;
}

export type PointTuple = [number, number];

export interface I_Sized {
    width: number;
    height: number;
}

export interface I_Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface PropTileSize {
    tileSize: number;
}

export type Direction = "up" | "down" | "left" | "right"


export interface I_GridProperties extends I_Sized, PropTileSize {

    /**
     * the number of columns
     */
    width: number;

    /**
     * the number of rows
     */
    height: number;

    /**
     * the pixel width of each tile, used for scaling up to actual size
     */
    tileSize: number;

}

export interface I_GridMethods {
    /**
     * the number of indexes in the grid
     * is usually width * height, but might not be for every design
     */
    getCount(): number;

    /**
     * get the x and y for where the tile at index i is in the grid,
     * where x and y are numbers of tiles
     */
    getPlacement(index: number): I_Point;

    /**
     * get the top and left coordinates for the item
     * on a square grid, this is getPlacement() multiplied by tileSize
     * but other shapes may tessellate in a more complex pattern
     */
    getPixelPosition(index: number): I_Point;

    /**
     * combines tileSize and pixelPosition into a bounding rectangle
     * for the tile at index i
     */
    getBoundingRect(index: number): I_Rectangle;

    /**
     * get the actual pixel size for the entire grid
     */
    getGridSize(): I_Sized;
}

export interface I_GridLayout extends I_GridProperties, I_GridMethods {
}


export interface I_GetSvg {
    getPolygonPoints(index: number): Polygon;
    getViewBox?(index: number): I_Sized | I_Rectangle;
}
