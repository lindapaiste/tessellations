import {I_GridProperties, I_Point, I_Rectangle, I_Sized} from "../universal/types";
import {DIAMOND_POINTS, diamondForOctagon, OCTAGON_POINTS, sideForWidth} from "./points";
import {isEven} from "../lib";
import {Polygon} from "geometric";
import IrregularOctagonGrid from "./IrregularOctagonGrid";

/**
 * an octagon grid alternates between rows or regular octagons
 * and rows of diamonds aka squares rotated by 45 degrees
 *
 * this regular version requires way less props
 * just needs a tileSize which becomes octagon width and height
 * and everything else can be computed from there
 *
 * just need to map props and pass off everything else to the irregular class
 */
export default class RegularOctagonGrid extends IrregularOctagonGrid {

    constructor(props: I_GridProperties) {
        const diamond = diamondForOctagon(props.tileSize);
        super({
            ...props,
            octagonWidth: props.tileSize,
            octagonHeight: props.tileSize,
            diamondWidth: diamond,
            diamondHeight: diamond,
        });
    }
}
