import {Group} from "../helpers/Group";
import {ExamplePatternTile} from "../helpers/ExamplePatternTile";
import {Hexagon} from "patterns/shapes";
import {randomColor} from "../randomColor";
import React from "react";

export const SpacingHexagons = () => (
    <Group title="Same Pattern, Different Spacing">

        <ExamplePatternTile
            shape={Hexagon}
            layout="triangular"
            elementWidth={90}
            spacing={50}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={Hexagon}
            layout="triangular"
            elementWidth={90}
            spacing={55}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={Hexagon}
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
            shape={Hexagon}
            layout="triangular"
            elementWidth={90}
            spacing={67}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={Hexagon}
            layout="triangular"
            elementWidth={90}
            spacing={80}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
            }}
        />
    </Group>
)