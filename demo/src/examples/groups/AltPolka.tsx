import React from "react";
import { EditablePatternTile } from "../helpers/EditablePatternTile";
import { Group } from "../helpers/Group";

export const AltPolka = (): JSX.Element => (
  <Group title="Alternative Polka Dots">
    <EditablePatternTile
      shape="hexagon"
      spacing={70}
      layout="triangular"
      elementWidth={20}
    />
    <EditablePatternTile
      shape="rhombus"
      spacing={70}
      layout="triangular"
      elementWidth={15}
    />
    <EditablePatternTile
      shape="plus"
      spacing={70}
      layout="triangular"
      elementWidth={15}
    />
  </Group>
);
