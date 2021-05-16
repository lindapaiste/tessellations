import { ParallelLines, ShapePattern } from "patterns/patterns";
import React from "react";
import { makePlus } from "patterns/shapes/polygon/Plus";
import { EditableLayeredPattern } from "../helpers/EditableLayeredPattern";
import { ExampleTile } from "../helpers/ExampleTile";
import { Group } from "../helpers/Group";
import { randomColor } from "../../util/random";

export const Layered = (): JSX.Element => (
  <Group title="Layered Patterns">
    <ExampleTile>
      <ParallelLines
        spacing={30}
        thickness={2}
        angle={90}
        color={randomColor()}
      />
      <ShapePattern
        spacing={60}
        layout="triangular"
        shape="rhombus"
        elementWidth={40}
        elementColor={randomColor()}
      />
    </ExampleTile>

    <EditableLayeredPattern>
      <ShapePattern
        shape="rectangle"
        spacingBetweenRows={300}
        spacing={100}
        stagger={0}
        elementWidth={50}
        elementHeight={300}
        elementColor={randomColor()}
      />
      <ShapePattern
        shape="rectangle"
        spacingBetweenRows={60}
        spacing={100}
        stagger={0}
        elementWidth={30}
        elementHeight={30}
        elementColor={randomColor()}
      />
      <ShapePattern
        spacingBetweenRows={60}
        spacing={100}
        stagger={0}
        start={[50, 0]}
        shape="circle"
        elementWidth={10}
        elementColor={randomColor()}
      />
    </EditableLayeredPattern>

    <ExampleTile>
      <ParallelLines
        color="black"
        angle={90}
        spacing={50}
        thickness={10}
        start={[25, 25]}
      />
      <ParallelLines
        color="black"
        angle={0}
        spacing={50}
        thickness={10}
        start={[25, 25]}
      />
      <ShapePattern
        layout="square"
        spacing={50}
        start={[25, 25]}
        shape="rectangle"
        elementColor={randomColor()}
        elementWidth={25}
        elementProps={{
          strokeWidth: 4,
          stroke: "black",
        }}
      />
    </ExampleTile>

    <EditableLayeredPattern>
      <ShapePattern
        spacing={100}
        layout="square"
        shape="rhombus"
        elementWidth={50}
        elementHeight={90}
        elementColor={randomColor()}
      />
      <ShapePattern
        spacing={100}
        layout="square"
        start={[50, 0]}
        shape="circle"
        elementWidth={10}
        elementColor={randomColor()}
      />
    </EditableLayeredPattern>

    <ExampleTile>
      <ShapePattern
        shape={makePlus(0.1)}
        spacing={60}
        layout="square"
        elementWidth={40}
        elementProps={{
          rotate: 45,
        }}
        elementColor={randomColor()}
      />
      <ShapePattern
        layout="diagonal"
        spacing={60}
        shape="circle"
        start={[30, 0]}
        elementWidth={5}
        elementColor={randomColor()}
      />
      <ShapePattern
        layout="square"
        spacing={60}
        shape="rhombus"
        start={[0, 0]}
        elementColor={randomColor()}
        elementWidth={10}
        elementHeight={10}
      />
    </ExampleTile>

    <EditableLayeredPattern>
      <ShapePattern
        shape="triangle"
        layout="triangular"
        elementWidth={70}
        elementColor={randomColor()}
        elementProps={{
          rotate: 45,
        }}
      />
      <ShapePattern
        elementColor={randomColor()}
        elementWidth={20}
        shape="triangle"
        layout="triangular"
        elementProps={{
          rotate: 225,
        }}
        spacing={70}
        start={[25, 0]}
      />
    </EditableLayeredPattern>
  </Group>
);
