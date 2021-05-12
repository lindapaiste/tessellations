import {Group} from "../helpers/Group";
import {ExamplePatternTile} from "../helpers/ExamplePatternTile";
import {Rhombus} from "patterns/shapes";
import React from "react";

export const RhombusSizes = () => (
    <Group title="Same Pattern, Different Size">
        <ExamplePatternTile
            spacing={60}
            layout="triangular"
            elementWidth={15}
            shape={Rhombus}
        />
        <ExamplePatternTile
            spacing={60}
            layout="triangular"
            elementWidth={30}
            shape={Rhombus}
        />
        <ExamplePatternTile
            spacing={60}
            layout="triangular"
            elementWidth={42}
            shape={Rhombus}
        />
        <ExamplePatternTile
            spacing={60}
            layout="triangular"
            elementWidth={55}
            shape={Rhombus}
        />
    </Group>
)