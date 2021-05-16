import React from "react";
import { EditablePatternTile } from "../helpers/EditablePatternTile";
import { Group } from "../helpers/Group";

export const OverlapLines = (): JSX.Element => (
  <Group title="Lines From Overlapping Shapes">
    <EditablePatternTile
      shape="rhombus"
      layout="square"
      spacing={60}
      spacingBetweenRows={55}
      elementWidth={45}
    />
    <EditablePatternTile
      shape="circle"
      layout="triangular"
      spacing={80}
      spacingBetweenRows={15}
      elementWidth={32}
    />
    <EditablePatternTile
      shape="hexagon"
      layout="triangular"
      spacing={120}
      spacingBetweenRows={20}
      elementWidth={50}
    />
    <EditablePatternTile
      shape="triangle"
      spacing={60}
      spacingBetweenRows={15}
      elementWidth={40}
    />
    <EditablePatternTile
      shape="arrow"
      spacing={75}
      spacingBetweenRows={23}
      elementWidth={50}
      start={[25, 0]}
    />
    <EditablePatternTile
      shape="plus"
      spacing={60}
      spacingBetweenRows={17}
      elementWidth={30}
    />
  </Group>
);
