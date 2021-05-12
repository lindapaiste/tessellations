import {Group} from "../helpers/Group";
import {ExamplePatternTile} from "../helpers/ExamplePatternTile";
import {Hexagon, Rhombus, Square} from "patterns/shapes";
import {randomColor} from "../randomColor";
import {makePlus} from "patterns/shapes/polygon/Plus";
import React from "react";

export const Tessellations = () => (
    <Group title="Filled Tessellations">
        <ExamplePatternTile
            shape={Hexagon}
            spacing={150}
            spacingBetweenRows={43}
            stagger={75}
            elementWidth={100}
            elementProps={{
                strokeWidth: 4,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={Square}
            layout="square"
            elementWidth={50}
            elementProps={{
                strokeWidth: 4,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={Rhombus}
            layout="triangular"
            elementWidth={100}
            elementHeight={50}
            spacingBetweenRows={25}
            elementProps={{
                strokeWidth: 4,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={makePlus(.5)}
            elementWidth={60}
            stagger={30}
            spacingBetweenRows={45}
            elementProps={{
                strokeWidth: 4,
                stroke: randomColor(),
            }}
        />
    </Group>
)