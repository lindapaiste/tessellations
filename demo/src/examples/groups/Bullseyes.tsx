import { Concentric } from "patterns/patterns";
import { Pattern } from "patterns/patterns/grid/BasePattern";
import React from "react";
import { Rectangle } from "patterns/shapes";
import { random } from "lodash";
import { randomHexes } from "../../util/random";
import { Group } from "../helpers/Group";
import { ExampleTile } from "../helpers/ExampleTile";
import { Point } from "./Radial";

// TODO: cannot use `ShapePattern` because `Concentric` isn't a standard shape

export const Bullseyes = (): JSX.Element => (
  <Group title="Bullseyes">
    <ExampleTile>
      <Pattern
        spacing={80}
        layout="triangular"
        Element={Concentric}
        elementProps={{
          colors: randomHexes(4),
          count: 4,
          thickness: 4,
        }}
      />
    </ExampleTile>
    <ExampleTile>
      <Pattern
        spacingBetweenRows={100}
        spacing={100}
        stagger={0}
        Element={Concentric}
        elementProps={{
          Element: Rectangle,
          colors: randomHexes(3),
          count: 25,
          thickness: 2,
        }}
      />
    </ExampleTile>
    {/* <ExampleTile>
      <Pattern
        spacingBetweenRows={100}
        spacing={100}
        stagger={50}
        Element={Concentric}
        elementProps={{
          colors: randomHexes(3),
          count: 10,
          thickness: 4,
          elementProps: {
            stroke: "black",
            strokeWidth: 1,
          },
        }}
      />
    </ExampleTile> */}
    <ExampleTile>
      <Pattern
        spacingBetweenRows={100}
        spacing={100}
        stagger={0}
        Element={Concentric}
        elementProps={{
          colors: randomHexes(3),
          count: 3,
          thickness: 12.5,
          Element: "circle",
          elementProps: ({ center }: { center: Point }) => ({
            center: [
              center[0] + random(-10, 10),
              center[1] + random(-10, 10),
            ] as Point,
          }),
        }}
      />
    </ExampleTile>
  </Group>
);
