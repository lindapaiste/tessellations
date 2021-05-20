import { ShapePattern } from "patterns/patterns";
import React from "react";
import { randomColor } from "../../util/random";
import { EditableLayeredPattern } from "../helpers/EditableLayeredPattern";
import { Group } from "../helpers/Group";

/**
 * Note: temporarily converted <ParallelLines/> to rectangle patterns
 * so that they can be edited as shape layers.
 */
export const Layered = (): JSX.Element => (
  <Group title="Layered Patterns">
    <EditableLayeredPattern>
      <ShapePattern
        spacing={30}
        spacingBetweenRows={300}
        start={[0, 150]}
        shape="rectangle"
        elementWidth={2}
        elementHeight={300}
        elementColor={randomColor()}
      />
      <ShapePattern
        spacing={60}
        layout="triangular"
        shape="rhombus"
        elementWidth={40}
        elementColor={randomColor()}
      />
    </EditableLayeredPattern>

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

    <EditableLayeredPattern>
      <ShapePattern
        layout="square"
        shape="rectangle"
        spacing={50}
        elementWidth={10}
        elementHeight={50}
        elementColor="black"
        start={[25, 25]}
      />
      <ShapePattern
        layout="square"
        shape="rectangle"
        spacing={50}
        elementWidth={50}
        elementHeight={10}
        elementColor="black"
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
    </EditableLayeredPattern>

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

    <EditableLayeredPattern>
      <ShapePattern
        shape="square"
        layout="square"
        spacing={60}
        elementWidth={50}
        elementColor={randomColor()}
      />
      <ShapePattern
        layout="square"
        spacing={60}
        shape="circle"
        start={[30, 30]}
        elementWidth={23}
        elementColor={randomColor()}
      />
    </EditableLayeredPattern>

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
