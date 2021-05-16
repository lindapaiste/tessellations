import React from "react";
import { EditablePatternTile } from "../helpers/EditablePatternTile";
import { Group } from "../helpers/Group";
import { randomColor } from "../../util/random";

export const SpacingHexagons = (): JSX.Element => (
  <Group title="Same Pattern, Different Spacing">
    {[50, 55, 60, 67, 80, 90].map((spacing) => (
      <EditablePatternTile
        key={spacing}
        shape="hexagon"
        layout="triangular"
        elementWidth={90}
        spacing={spacing}
        elementColor="none"
        elementProps={{
          strokeWidth: 2,
          stroke: randomColor(),
        }}
      />
    ))}
  </Group>
);
