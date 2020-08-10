import React from "react";
import {Direction} from "../universal/types";
import {getPointsString} from "./points";

export default ({color, direction, ...props}: { color: string, direction?: Direction }) => (
    <svg viewBox="0 0 1 1">
        <polygon
            points={getPointsString(1, direction)}
            fill={color}
        />
    </svg>
);
