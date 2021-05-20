import React from "react";
import { ShapePattern } from "patterns/patterns";
import { makePlus } from "patterns/shapes/polygon/Plus";
import { EditablePatternTile } from "../helpers/EditablePatternTile";
import { ExampleTile } from "../helpers/ExampleTile";
import { Group } from "../helpers/Group";
import { randomColor } from "../../util/random";

export const Tessellations = (): JSX.Element => (
  <Group title="Filled Tessellations">
    <EditablePatternTile
      shape="hexagon"
      spacing={150}
      spacingBetweenRows={43}
      stagger={75}
      elementWidth={100}
      elementProps={{
        strokeWidth: 4,
        stroke: randomColor(),
      }}
    />
    <EditablePatternTile
      shape="square"
      layout="square"
      spacing={50}
      elementWidth={50}
      elementProps={{
        strokeWidth: 4,
        stroke: randomColor(),
      }}
    />
    <EditablePatternTile
      shape="rhombus"
      layout="triangular"
      elementWidth={100}
      elementHeight={50}
      spacingBetweenRows={25}
      elementProps={{
        strokeWidth: 4,
        stroke: randomColor(),
      }}
    />
    <ExampleTile>
      <ShapePattern
        spacing={60}
        stagger={30}
        spacingBetweenRows={45}
        shape={makePlus(0.5)}
        elementWidth={60}
        elementHeight={60}
        elementColor={randomColor()}
        elementProps={{
          strokeWidth: 6,
          stroke: randomColor(),
        }}
      />
    </ExampleTile>
    <EditablePatternTile
      shape="houndstooth"
      elementWidth={100}
      spacing={80}
      spacingBetweenRows={40}
      stagger={40}
      elementProps={{
        strokeWidth: 4,
        stroke: randomColor(),
      }}
    />
    <EditablePatternTile
      shape="houndscross"
      elementWidth={100}
      layout="diagonal"
      spacing={100}
      elementProps={{
        strokeWidth: 4,
        stroke: randomColor(),
      }}
    />
  </Group>
);
