import React from "react";
import { EditablePatternTile } from "../helpers/EditablePatternTile";
import { Group } from "../helpers/Group";
import { randomColor } from "../../util/random";

export const Outlines = (): JSX.Element => (
  <Group title="More Outlines">
    <EditablePatternTile
      shape="circle"
      layout="triangular"
      elementWidth={40}
      elementColor="none"
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
      }}
    />
    <EditablePatternTile
      shape="circle"
      layout="triangular"
      elementWidth={90}
      spacing={45}
      elementColor="none"
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
      }}
    />
    <EditablePatternTile
      shape="circle"
      layout="triangular"
      elementWidth={90}
      spacing={60}
      elementColor="none"
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
      }}
    />
    <EditablePatternTile
      shape="circle"
      layout="triangular"
      elementWidth={90}
      spacing={79}
      elementColor="none"
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
      }}
    />
    <EditablePatternTile
      shape="circle"
      layout="square"
      elementWidth={90}
      spacing={63}
      elementColor="none"
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
      }}
    />
    <EditablePatternTile
      shape="square"
      layout="square"
      elementWidth={90}
      spacing={63}
      elementColor="none"
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
        rotate: 30,
      }}
    />
    <EditablePatternTile
      shape="square"
      layout="triangular"
      elementWidth={90}
      spacing={60}
      elementColor="none"
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
        rotate: 45,
      }}
    />
    <EditablePatternTile
      shape="square"
      layout="diagonal"
      elementWidth={90}
      spacing={63}
      elementColor="none"
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
        rotate: 30,
      }}
    />
    <EditablePatternTile
      shape="triangle"
      layout="diagonal"
      elementWidth={90}
      spacing={61}
      elementColor="none"
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
      }}
    />
    <EditablePatternTile
      shape="triangle"
      layout="triangular"
      elementWidth={104}
      spacing={66}
      elementColor="none"
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
        rotate: 6,
      }}
    />
    <EditablePatternTile
      shape="triangle"
      layout="triangular"
      elementWidth={70}
      spacing={49}
      elementColor="none"
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
        rotate: 45,
      }}
    />
    <EditablePatternTile
      shape="rhombus"
      layout="triangular"
      elementWidth={70}
      spacing={60}
      elementColor="none"
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
      }}
    />
    <EditablePatternTile
      shape="rhombus"
      layout="square"
      elementWidth={70}
      spacing={50}
      elementColor="none"
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
      }}
    />
    <EditablePatternTile
      shape="rhombus"
      layout="diagonal"
      elementWidth={70}
      spacing={50}
      elementColor="none"
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
      }}
    />
    <EditablePatternTile
      shape="rhombus"
      layout="diagonal"
      elementWidth={70}
      spacing={55}
      elementColor="none"
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
      }}
    />
    <EditablePatternTile
      shape="hexagon"
      layout="diagonal"
      elementWidth={70}
      spacing={55}
      elementColor="none"
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
      }}
    />
    <EditablePatternTile
      shape="hexagon"
      layout="square"
      elementWidth={70}
      spacing={60}
      spacingBetweenRows={30}
      elementColor="none"
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
      }}
    />
    <EditablePatternTile
      shape="octagon"
      layout="square"
      elementWidth={81}
      spacing={44}
      elementColor="none"
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
      }}
    />
    <EditablePatternTile
      shape="octagon"
      layout="square"
      elementWidth={78}
      spacing={55}
      elementColor="none"
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
      }}
    />
    <EditablePatternTile
      shape="octagon"
      layout="square"
      elementWidth={85}
      spacing={55}
      elementColor="none"
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
        rotate: 17,
      }}
    />
    <EditablePatternTile
      shape="octagon"
      layout="square"
      elementWidth={82}
      spacing={47}
      elementColor="none"
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
        rotate: 17,
      }}
    />
    <EditablePatternTile
      shape="houndscross"
      layout="diagonal"
      elementWidth={70}
      spacing={58}
      elementColor="none"
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
        rotate: 33,
      }}
    />
    <EditablePatternTile
      shape="houndscross"
      layout="diagonal"
      elementWidth={36}
      spacing={58}
      elementColor="none"
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
        rotate: 33,
      }}
    />
    <EditablePatternTile
      shape="houndscross"
      layout="diagonal"
      elementWidth={96}
      spacing={61}
      elementColor="none"
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
        rotate: 71,
      }}
    />
    <EditablePatternTile
      shape="houndscross"
      layout="diagonal"
      elementWidth={73}
      spacing={61}
      elementColor="none"
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
      }}
    />
    <EditablePatternTile
      shape="houndstooth"
      layout="triangular"
      elementWidth={100}
      spacing={49}
      elementColor="none"
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
        rotate: 135,
      }}
    />
    <EditablePatternTile
      shape="houndstooth"
      layout="square"
      elementWidth={100}
      spacing={50}
      elementColor="none"
      elementProps={{
        strokeWidth: 2,
        stroke: randomColor(),
        rotate: 37,
      }}
    />
  </Group>
);
