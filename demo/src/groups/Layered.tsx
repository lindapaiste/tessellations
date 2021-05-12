import {Group} from "../helpers/Group";
import {Background as Tile} from "patterns/background";
import {makeProps} from "../helpers/MakeProps";
import {ParallelLines, ShapePattern} from "patterns/patterns";
import {randomColor} from "../randomColor";
import {Pattern} from "patterns/patterns/PatternFactory";
import {Circle, Rectangle, Rhombus, Triangle} from "patterns/shapes";
import {ExamplePatternTile} from "../helpers/ExamplePatternTile";
import {makePlus} from "patterns/shapes/polygon/Plus";
import React from "react";

export const Layered = () => (
    <Group title="Layered Patterns">
        <Tile
            {...makeProps()}
        >
            <ParallelLines
                {...makeProps()}
                spacing={30}
                thickness={2}
                angle={90}
                color={randomColor()}
            />
            <Pattern
                {...makeProps()}
                spacing={60}
                layout="triangular"
                Element={Rhombus}
                elementProps={{
                    fill: randomColor(),
                    width: 40,
                }}
            />
        </Tile>


        <Tile
            {...makeProps()}
        >
            <Pattern
                {...makeProps()}
                spacingBetweenRows={300}
                spacing={100}
                stagger={0}
                Element={Rectangle}
                elementProps={{
                    width: 50,
                    height: 300,
                    fill: randomColor(),
                }}
            />
            <Pattern
                {...makeProps()}
                spacingBetweenRows={60}
                spacing={100}
                stagger={0}
                Element={Rectangle}
                elementProps={{
                    width: 30,
                    height: 30,
                    fill: randomColor(),
                }}
            />
            <Pattern
                {...makeProps()}
                spacingBetweenRows={60}
                spacing={100}
                stagger={0}
                start={[50, 0]}
                Element={Circle}
                elementProps={{
                    width: 10,
                    fill: randomColor(),
                }}
            />
        </Tile>


        <Tile
            {...makeProps()}
        >
            <ParallelLines
                {...makeProps()}
                color={"black"}
                angle={90}
                spacing={50}
                thickness={10}
                start={[25, 25]}
            />
            <ParallelLines
                {...makeProps()}
                color={"black"}
                angle={0}
                spacing={50}
                thickness={10}
                start={[25, 25]}
            />

            <Pattern
                {...makeProps()}
                spacingBetweenRows={50}
                spacing={50}
                stagger={0}
                start={[25, 25]}
                Element={Rectangle}
                elementProps={{
                    width: 25,
                    fill: randomColor(),
                    strokeWidth: 4,
                    stroke: "black"
                }}
            />
        </Tile>


        <Tile
            {...makeProps()}
        >
            <Pattern
                {...makeProps()}
                spacing={100}
                layout={"square"}
                Element={Rhombus}
                elementProps={{
                    fill: randomColor(),
                    width: 50,
                    height: 90
                }}
            />
            <Pattern
                {...makeProps()}
                spacing={100}
                layout={"square"}
                start={[50, 0]}
                Element={Circle}
                elementProps={{
                    fill: randomColor(),
                    width: 10
                }}
            />
        </Tile>

        <ExamplePatternTile
            shape={makePlus(.1)}
            spacing={60}
            layout="square"
            elementWidth={40}
            elementProps={{
                rotate: 45
            }}
        >
            <Pattern
                {...makeProps()}
                layout={"diagonal"}
                spacing={60}
                Element={Circle}
                start={[30, 0]}
                elementProps={{
                    fill: randomColor(),
                    width: 5
                }}
            />
            <Pattern
                {...makeProps()}
                layout={"square"}
                spacing={60}
                Element={Rhombus}
                start={[0, 0]}
                elementProps={{
                    fill: randomColor(),
                    width: 10,
                    height: 10,
                }}
            />
        </ExamplePatternTile>

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
        >
            <ShapePattern
                {...makeProps()}
                elementWidth={20}
                shape={Triangle}
                layout="triangular"
                elementColor="none"
                elementProps={{
                    strokeWidth: 2,
                    stroke: randomColor(),
                    rotate: 225,
                }}
                spacing={70}
                start={[25, -3]}
            />
        </ExamplePatternTile>
        <ExamplePatternTile
            shape={Triangle}
            layout="triangular"
            elementWidth={70}
            elementProps={{
                rotate: 45,
            }}
        >
            <ShapePattern
                {...makeProps()}
                elementWidth={20}
                shape={Triangle}
                layout="triangular"
                elementProps={{
                    rotate: 225,
                }}
                spacing={70}
                start={[25, 0]}
            />
        </ExamplePatternTile>
    </Group>
)