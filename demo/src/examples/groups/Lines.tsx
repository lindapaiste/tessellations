import { ParallelLines } from "patterns/patterns";
import React from "react";
import { ExampleTile } from "../helpers/ExampleTile";
import { Group } from "../helpers/Group";
import { randomColor } from "../../util/random";

export const Lines = (): JSX.Element => (
  <Group title="Lines">
    <ExampleTile>
      <ParallelLines
        spacing={30}
        thickness={2}
        angle={30}
        color={randomColor()}
      />
      <ParallelLines
        spacing={30}
        thickness={2}
        angle={90}
        color={randomColor()}
      />
      <ParallelLines
        spacing={30}
        thickness={2}
        angle={150}
        color={randomColor()}
      />
    </ExampleTile>

    <ExampleTile>
      <ParallelLines
        spacing={50}
        start={[20, 0]}
        thickness={25}
        angle={90}
        color={randomColor()}
      />
      <ParallelLines
        spacing={50}
        start={[20, 0]}
        thickness={1}
        angle={90}
        color={randomColor()}
      />
    </ExampleTile>

    <ExampleTile>
      <ParallelLines
        spacing={60}
        start={[0, 60]}
        thickness={10}
        angle={0}
        color={randomColor()}
      />
      <ParallelLines
        spacing={60}
        start={[0, 0]}
        thickness={10}
        angle={90}
        color={randomColor()}
      />
      <ParallelLines
        spacing={60}
        start={[0, 90]}
        thickness={10}
        angle={0}
        color={randomColor()}
      />
      <ParallelLines
        spacing={60}
        start={[30, 0]}
        thickness={10}
        angle={90}
        color={randomColor()}
      />
    </ExampleTile>
  </Group>
);
