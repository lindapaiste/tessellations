import React from "react";
import { ShapePattern } from "patterns/patterns";
import { randomColor } from "../../util/random";
import { ExampleTile } from "../helpers/ExampleTile";
import { Group } from "../helpers/Group";

export const Escher = (): JSX.Element => (
  <Group
    title="Escher Effect"
    subtitle="Defining elementProps as a function of position"
  >
    <ExampleTile>
      <ShapePattern
        elementColor={randomColor()}
        spacing={37.5}
        layout="diagonal"
        shape="square"
        elementWidth={18.75}
        elementProps={({ center }) => ({ width: center[1] / 8 })}
      />
    </ExampleTile>
    <ExampleTile>
      <ShapePattern
        elementColor={randomColor()}
        spacing={37.5}
        layout="diagonal"
        shape="square"
        elementWidth={18.75}
        elementProps={({ center }) => ({
          width: center[1] / 8,
          height: center[1] / 8,
        })}
      />
    </ExampleTile>
    <ExampleTile>
      <ShapePattern
        elementColor={randomColor()}
        spacing={37.5}
        layout="diagonal"
        shape="circle"
        elementWidth={18.75}
        elementProps={({ center }) => ({
          width: Math.max(0, center[1] / 8),
          height: Math.max(0, center[1] / 8),
        })}
      />
    </ExampleTile>
  </Group>
);
