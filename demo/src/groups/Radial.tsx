import {Group} from "../helpers/Group";
import {Background as Tile} from "patterns/background";
import {makeProps} from "../helpers/MakeProps";
import {RadialRotate} from "patterns/patterns";
import {Circle, Rectangle, Rhombus, Triangle} from "patterns/shapes";
import {randomColor} from "../randomColor";
import React from "react";

type Point = [number, number];
export const Radial = () => (
    <Group title="Radial Rotations">

        <Tile
            {...makeProps()}
        >
            <RadialRotate
                count={10}
                Element={(props) => (
                    <>
                        <Circle
                            center={[150, 120]}
                            width={10}
                            fill={randomColor()}
                            {...props}
                        />
                        <Circle
                            center={[150, 100]}
                            width={20}
                            fill={randomColor()}
                            {...props}
                        />
                        <Circle
                            center={[150, 60]}
                            width={40}
                            fill={randomColor()}
                            {...props}
                        />
                        <Circle
                            center={[150, 0]}
                            width={60}
                            fill={randomColor()}
                            {...props}
                        />

                    </>
                )}
                elementProps={{}}
            />
        </Tile>


        <Tile
            {...makeProps()}
        >
            <RadialRotate
                count={3}
                Element={Rhombus}
                elementProps={{
                    // top + 2
                    center: [150, 107] as Point,
                    width: 50,
                    fill: randomColor(),
                }}
            />
            <RadialRotate
                count={3}
                Element={Rhombus}
                elementProps={{
                    // bottom + 2
                    center: [150, 193] as Point,
                    width: 50,
                    fill: randomColor(),
                }}
            />
            <RadialRotate
                count={6}
                Element={Rhombus}
                elementProps={{
                    // right side outside + 5
                    center: [230, 150] as Point,
                    width: 50,
                    fill: randomColor(),
                }}
            />
            <RadialRotate
                count={6}
                Element={Rectangle}
                elementProps={{
                    // top + 5
                    center: [150, 29] as Point,
                    width: 104,
                    height: 52,
                    fill: randomColor(),
                }}
            />
            <RadialRotate
                count={6}
                Element={Triangle}
                elementProps={{
                    // right + 5
                    center: [285, 150] as Point,
                    width: 50,
                    fill: randomColor(),
                    rotate: -90,
                }}
            />
            <RadialRotate
                count={6}
                Element={Circle}
                elementProps={{
                    // right + 5
                    center: [258, 150] as Point,
                    width: 12,
                    fill: randomColor(),
                    rotate: -90,
                }}
            />
        </Tile>

    </Group>
)