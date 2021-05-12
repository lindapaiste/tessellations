import {Group} from "../helpers/Group";
import {ExamplePatternTile} from "../helpers/ExamplePatternTile";
import {Circle, Hexagon, Octagon} from "patterns/shapes";
import {randomColor} from "../randomColor";
import {makePlus} from "patterns/shapes/polygon/Plus";
import React from "react";

export const Negative = () => (
    <Group title="Negative & Positive Space Tessellations">
        <ExamplePatternTile
            shape={Hexagon}
            layout="triangular"
            elementWidth={100}
        />
        <ExamplePatternTile
            shape={Octagon}
            elementWidth={100}
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={Circle}
            elementWidth={50}
        />
        <ExamplePatternTile
            shape={makePlus(.45)}
            elementWidth={60}
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
            }}
        />
    </Group>
)