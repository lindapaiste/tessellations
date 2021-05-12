import {Group} from "../helpers/Group";
import {ExamplePatternTile} from "../helpers/ExamplePatternTile";
import {Circle, Hexagon, Rhombus, Triangle} from "patterns/shapes";
import React from "react";

export const OverlapLines = () => (
    <Group title="Lines From Overlapping Shapes">
        <ExamplePatternTile
            shape={Rhombus}
            layout="square"
            spacing={60}
            spacingBetweenRows={55}
            elementWidth={45}
        />
        <ExamplePatternTile
            shape={Circle}
            layout="triangular"
            spacing={80}
            spacingBetweenRows={15}
            elementWidth={32}
        />
        <ExamplePatternTile
            shape={Hexagon}
            layout="triangular"
            spacing={120}
            spacingBetweenRows={20}
            elementWidth={50}
        />
        <ExamplePatternTile
            shape={Triangle}
            layout="square"
            spacing={60}
            spacingBetweenRows={15}
            elementWidth={20}
        />
    </Group>
)