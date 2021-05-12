import {Group} from "../helpers/Group";
import {Background as Tile} from "patterns/background";
import {makeProps} from "../helpers/MakeProps";
import {Pattern} from "patterns/patterns/PatternFactory";
import {Concentric} from "patterns/patterns";
import {randomHexes} from "../randomColor";
import {Rectangle} from "patterns/shapes";
import React from "react";

export const Bullseyes = () => (
    <Group title="Bullseyes">
        <Tile
            {...makeProps()}
        >
            <Pattern
                {...makeProps()}
                spacing={80}
                layout="triangular"
                Element={Concentric}
                elementProps={{
                    colors: randomHexes(2),
                    rings: 4,
                    ringThickness: 8,
                }}
            />
        </Tile>
        <Tile
            {...makeProps()}
        >
            <Pattern
                {...makeProps()}
                spacingBetweenRows={100}
                spacing={100}
                stagger={0}
                Element={Concentric}
                elementProps={{
                    RenderRing: Rectangle,
                    colors: randomHexes(3),
                    rings: 25,
                    ringThickness: 4,
                }}
            />
        </Tile>
        <Tile
            {...makeProps()}
        >
            <Pattern
                {...makeProps()}
                spacingBetweenRows={100}
                spacing={100}
                stagger={50}
                Element={Concentric}
                elementProps={{
                    colors: randomHexes(3),
                    rings: 10,
                    ringThickness: 8,
                    stroke: "black",
                    strokeWidth: 1,
                }}
            />
        </Tile>
    </Group>
)