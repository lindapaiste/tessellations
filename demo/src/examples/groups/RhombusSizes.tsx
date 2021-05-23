import React from "react";
import { EditablePatternTile } from "../helpers/EditablePatternTile";
import { Group } from "../helpers/Group";

export const RhombusSizes = (): JSX.Element => (
  <Group title="Same Pattern, Different Size">
    {[10, 15, 30, 40, 47, 55].map((elementWidth) => (
      <EditablePatternTile
        key={elementWidth.toString()}
        elementWidth={elementWidth}
        shape="rhombus"
        spacing={60}
        layout="triangular"
        title={`Rhombus width: ${elementWidth}`}
      />
    ))}
  </Group>
);
