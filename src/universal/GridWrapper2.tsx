import React from "react";
import {I_Sized} from "./types";
import {makeStyledView} from "../lib/makeStyledView";

/**
 * grid wrapper is a fixed-size View
 * with position=relative so that tiles can use absolute positioning
 */

/**
 * takes the gridSize - height and width - as a prop
 */
const GridWrapper = makeStyledView((props: I_Sized) => ({
    width: props.width,
    height: props.height,
    position: "relative",
}))

export default GridWrapper;
