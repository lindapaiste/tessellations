import {I_Rectangle, I_Sized} from "../types";
import {Polygon} from "geometric";

/**
 * width and height required but position optional
 */
export type SizeOrRect = Partial<I_Rectangle> & I_Sized;

/**
 * viewBox defaults to 0,0,1,1 if not set
 */
export interface Props {
    color: string;
    viewBox?: SizeOrRect;
    polygon: Polygon;
}
