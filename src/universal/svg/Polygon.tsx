import React from "react";
import {Props} from "./types";
import {polygonSvgString, viewBoxSvgString} from "./util";

export default ({color, viewBox, polygon, ...props}: Props) => (
    <svg viewBox={viewBox ? viewBoxSvgString(viewBox) : "0 0 1 1"}>
        <polygon
            points={polygonSvgString(polygon)}
            fill={color}
        />
    </svg>
);
