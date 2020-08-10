import Svg, { Path, Polygon, SvgProps } from "react-native-svg";
import React from "react";
import {getPointsString} from "./points";
import {Direction} from "../universal/types";

export default ({ color, direction, ...props }: { color: string, direction?: Direction } & SvgProps) => (
  <Svg {...props} viewBox="0 0 1 1">
    <Polygon
        fill={color}
        points={getPointsString(1, direction)}
    />
  </Svg>
);
