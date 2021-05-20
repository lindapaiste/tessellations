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
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
      }}
    />
    <EditablePatternTile
      shape="octagon"
      elementWidth={100}
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
      }}
    />
    <EditablePatternTile
      shape="circle"
      elementWidth={50}
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
      }}
    />
    <EditablePatternTile
      shape="plus"
      elementWidth={60}
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
      }}
    />
    <EditablePatternTile
      shape="houndscross"
      elementWidth={80}
      spacing={60}
      spacingBetweenRows={60}
      stagger={80}
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
      }}
    />
    <EditablePatternTile
      shape="houndscross"
      elementWidth={40}
      spacing={60}
      spacingBetweenRows={30}
      stagger={30}
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
        rotate: 31,
      }}
    />
  </Group>
);
