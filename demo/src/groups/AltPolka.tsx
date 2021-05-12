import {Group} from "../helpers/Group";
import {ExamplePatternTile} from "../helpers/ExamplePatternTile";
import {Circle, Hexagon, Plus, Rhombus} from "patterns/shapes";
import React from "react";

export const AltPolka = () => (
    <Group title="Alternative Polka Dots">


        <ExamplePatternTile
            shape={Hexagon}
            spacing={70}
            layout="triangular"
            elementWidth={20}
        />
        <ExamplePatternTile
            shape={Circle}
            spacing={50}
            layout="triangular"
            elementWidth={10}
        />
        <ExamplePatternTile
            shape={Rhombus}
            spacing={70}
            layout="triangular"
            elementWidth={15}
        />
        <ExamplePatternTile
            shape={Plus}
            spacing={70}
            layout="triangular"
            elementWidth={15}
        />
    </Group>
)