import {Group} from "../helpers/Group";
import {ExamplePatternTile} from "../helpers/ExamplePatternTile";
import {Circle, Hexagon, Rhombus, Square, Triangle} from "patterns/shapes";
import {randomColor} from "../randomColor";
import React from "react";

export const Outlines = () => (
    <Group title="More Outlines">
        <ExamplePatternTile
            shape={Circle}
            layout="triangular"
            elementWidth={40}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={Circle}
            layout="triangular"
            elementWidth={90}
            spacing={45}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={Circle}
            layout="triangular"
            elementWidth={90}
            spacing={60}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={Circle}
            layout="triangular"
            elementWidth={90}
            spacing={79}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={Circle}
            layout="square"
            elementWidth={90}
            spacing={63}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={Square}
            layout="square"
            elementWidth={90}
            spacing={63}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
                rotate: 30
            }}
        />
        <ExamplePatternTile
            shape={Square}
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
        <ExamplePatternTile
            shape={Square}
            layout="diagonal"
            elementWidth={90}
            spacing={63}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
                rotate: 30
            }}
        />
        <ExamplePatternTile
            shape={Triangle}
            layout="diagonal"
            elementWidth={90}
            spacing={61}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={Triangle}
            layout="triangular"
            elementWidth={70}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
                rotate: 45,
            }}
        />
        <ExamplePatternTile
            shape={Triangle}
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
        <ExamplePatternTile
            shape={Rhombus}
            layout="triangular"
            elementWidth={70}
            spacing={60}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={Rhombus}
            layout="square"
            elementWidth={70}
            spacing={50}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={Rhombus}
            layout="diagonal"
            elementWidth={70}
            spacing={50}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={Rhombus}
            layout="diagonal"
            elementWidth={70}
            spacing={55}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={Hexagon}
            layout="diagonal"
            elementWidth={70}
            spacing={55}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={Hexagon}
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
    </Group>
)