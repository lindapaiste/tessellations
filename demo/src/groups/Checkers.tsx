import {Group} from "../helpers/Group";
import {CheckerTile} from "patterns/patterns/instances/Checkers";
import {makeProps} from "../helpers/MakeProps";
import {ExamplePatternTile} from "../helpers/ExamplePatternTile";
import {Arrow, HoundsCross, HoundsTooth, Rhombus, Triangle} from "patterns/shapes";
import {randomColor} from "../randomColor";
import React from "react";

export const Checkers = () => (
    <Group title="50/50 Checkerboard Tessellations">
        <CheckerTile
            {...makeProps()}
            elementWidth={50}
        />
        <ExamplePatternTile
            elementWidth={60}
            shape={Triangle}
            stagger={30}
        />
        <ExamplePatternTile
            shape={Arrow}
            elementWidth={70}
        />
        <ExamplePatternTile
            elementWidth={50}
            elementColor={randomColor()}
            shape={Rhombus}
        />
        <ExamplePatternTile
            elementWidth={50}
            elementColor={randomColor()}
            shape={HoundsTooth}
            spacing={40}
            spacingBetweenRows={40}
        />
        <ExamplePatternTile
            elementWidth={20}
            elementColor={randomColor()}
            shape={HoundsCross}
        />
    </Group>
)