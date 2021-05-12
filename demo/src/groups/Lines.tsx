import {Group} from "../helpers/Group";
import {Background as Tile} from "patterns/background";
import {makeProps} from "../helpers/MakeProps";
import {ParallelLines} from "patterns/patterns";
import {randomColor} from "../randomColor";
import React from "react";

export const Lines = () => (
    <Group title="Lines">
        <Tile
            {...makeProps()}
        >
            <ParallelLines
                {...makeProps()}
                spacing={30}
                thickness={2}
                angle={30}
                color={randomColor()}
            />
            <ParallelLines
                {...makeProps()}
                spacing={30}
                thickness={2}
                angle={90}
                color={randomColor()}
            />
            <ParallelLines
                {...makeProps()}
                spacing={30}
                thickness={2}
                angle={150}
                color={randomColor()}
            />
        </Tile>

        <Tile
            {...makeProps()}
        >
            <ParallelLines
                {...makeProps()}
                spacing={50}
                start={[20, 0]}
                thickness={25}
                angle={90}
                color={randomColor()}
            />
            <ParallelLines
                {...makeProps()}
                spacing={50}
                start={[20, 0]}
                thickness={1}
                angle={90}
                color={randomColor()}
            />
        </Tile>

        <Tile
            {...makeProps()}
        >
            <ParallelLines
                {...makeProps()}
                spacing={30}
                start={[0, 0]}
                thickness={10}
                angle={45}
                color={randomColor()}
            />
            <ParallelLines
                {...makeProps()}
                spacing={30}
                start={[10 * Math.sqrt(2), 0]}
                thickness={10}
                angle={45}
                color={randomColor()}
            />
            <ParallelLines
                {...makeProps()}
                spacing={30}
                start={[20 * Math.sqrt(2), 0]}
                thickness={10}
                angle={45}
                color={randomColor()}
            />
        </Tile>

    </Group>
)