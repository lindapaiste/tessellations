import React from "react";
import { EditablePatternTile } from "../helpers/EditablePatternTile";
import { Group } from "../helpers/Group";
import { randomColor } from "../../util/random";

export const Negative = (): JSX.Element => (
  <Group title="Negative & Positive Space Tessellations">
    <EditablePatternTile
      shape="hexagon"
      layout="triangular"
      elementWidth={100}
    />
    <EditablePatternTile
      shape="octagon"
      elementWidth={100}
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
      }}
    />
    <EditablePatternTile shape="circle" elementWidth={50} />
    <EditablePatternTile
      shape="plus"
      elementWidth={60}
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
      }}
    />
  </Group>
);
