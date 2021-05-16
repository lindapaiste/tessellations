import React from "react";
import { EditablePatternTile } from "../helpers/EditablePatternTile";
import { Group } from "../helpers/Group";

export const Checkers = (): JSX.Element => (
  <Group title="50/50 Checkerboard Tessellations">
    <EditablePatternTile
      shape="square"
      stagger={50}
      spacing={100}
      spacingBetweenRows={50}
      elementWidth={50}
    />
    <EditablePatternTile elementWidth={60} shape="triangle" stagger={30} />
    <EditablePatternTile shape="arrow" elementWidth={70} />
    <EditablePatternTile elementWidth={50} shape="rhombus" />
    <EditablePatternTile
      elementWidth={50}
      shape="houndstooth"
      spacing={40}
      spacingBetweenRows={40}
    />
    <EditablePatternTile elementWidth={20} shape="houndscross" />
  </Group>
);
