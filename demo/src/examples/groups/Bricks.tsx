import React from "react";
import { ShapePattern } from "patterns/patterns";
import { EditablePatternTile } from "../helpers/EditablePatternTile";
import { ExampleTile } from "../helpers/ExampleTile";
import { Group } from "../helpers/Group";
import { randomColor } from "../../util/random";

/**
 * The only difference here is whether the randomColor function is called once to get a color for all bricks,
 * or if it is called individually for each brick.
 */
export const Bricks = (): JSX.Element => (
  <Group title="Uniform Color vs. Individual Color">
    <EditablePatternTile
      spacingBetweenRows={50}
      spacing={100}
      stagger={50}
      shape="rectangle"
      elementWidth={100}
      elementHeight={50}
      elementColor={randomColor()}
      elementProps={{
        stroke: "black",
        strokeWidth: 1,
      }}
    />
    <ExampleTile>
      <ShapePattern
        spacingBetweenRows={50}
        spacing={100}
        stagger={50}
        shape="rectangle"
        elementWidth={100}
        elementHeight={50}
        elementProps={() => ({
          stroke: "black",
          strokeWidth: 1,
          fill: randomColor(),
        })}
      />
    </ExampleTile>
  </Group>
);
