import {Group} from "../helpers/Group";
import {Background as Tile} from "patterns/background";
import {makeProps} from "../helpers/MakeProps";
import {Pattern} from "patterns/patterns/PatternFactory";
import {Rectangle} from "patterns/shapes";
import {randomColor} from "../randomColor";
import React from "react";

export const Bricks = () => (
    <Group title="Uniform Color vs. Individual Color">
        <Tile
            {...makeProps()}
        >
            <Pattern
                {...makeProps()}
                spacingBetweenRows={50}
                spacing={100}
                stagger={50}
                Element={Rectangle}
                elementProps={{
                    fill: randomColor(),
                    width: 100,
                    height: 50,
                    stroke: "black",
                    strokeWidth: 1,
                }}
            />

        </Tile>
        <Tile
            {...makeProps()}
        >
            <Pattern
                {...makeProps()}
                spacingBetweenRows={50}
                spacing={100}
                stagger={50}
                Element={(props) => (
                    <Rectangle
                        {...props}
                        fill={randomColor()}
                    />
                )}
                elementProps={{
                    width: 100,
                    height: 50,
                    stroke: "black",
                    strokeWidth: 1,
                }}
            />
        </Tile>
    </Group>
)