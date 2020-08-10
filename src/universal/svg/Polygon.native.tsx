import Svg, { Path, Polygon, SvgProps } from "react-native-svg";
import React from "react";
import {Props} from "./types";
import {polygonSvgString, viewBoxSvgString} from "./util";

export default ({color, viewBox, polygon, ...props}: Props & SvgProps) => (
    <Svg viewBox={viewBox ? viewBoxSvgString(viewBox) : "0 0 1 1"}>
        <Polygon
            points={polygonSvgString(polygon)}
            fill={color}
        />
    </Svg>
);
