import React from "react";
import { randomColor } from "../../util/random";
import { EditablePatternTile } from "../helpers/EditablePatternTile";
import { Group } from "../helpers/Group";

export const Scales = (): JSX.Element => (
  <Group title="Scales">
    <EditablePatternTile
      elementColor={randomColor()}
      shape="triangle"
      layout="diagonal"
      spacing={75}
      spacingBetweenRows={17}
      elementWidth={100}
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
      }}
    />
    <EditablePatternTile
      elementColor={randomColor()}
      shape="circle"
      layout="diagonal"
      elementWidth={50}
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
      }}
    />
    <EditablePatternTile
      elementColor={randomColor()}
      layout="diagonal"
      shape="hexagon"
      elementWidth={75}
      spacingBetweenRows={26}
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
        rotate: 30,
      }}
    />
  </Group>
);
