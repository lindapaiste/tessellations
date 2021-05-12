import {
    Arrow,
    Circle,
    Hexagon,
    HoundsCross,
    HoundsTooth,
    Octagon,
    Plus,
    Rectangle,
    Rhombus,
    Square,
    Triangle,
    Concentric, LayoutName, ParallelLines, RadialRotate, Background as Tile, ShapePattern, ShapePatternProps as ShapePatternProps, ShapePatternTile
} from "@lindapaiste/react-svg-patterns";
import React, {PropsWithChildren} from "react";
import {randomColor, randomHexes} from "./randomColor";
import {makePlus} from "@lindapaiste/react-svg-patterns/shapes/polygon/Plus";
import { Pattern } from "@lindapaiste/react-svg-patterns/patterns/PatternFactory";

type Point = [number, number];
/**
 * helper to pass standard props to an example tile
 */
const makeProps = () => ({
    width: 300,
    height: 300,
    color: randomColor(), //remove when no longer needed
    elementColor: randomColor(),
    backgroundColor: randomColor(),
});

const ExamplePatternTile = (props: PropsWithChildren<ShapePatternProps>) => (
    <ShapePatternTile
        {...makeProps()}
        {...props}
    />
)

const FlexTiles = ({children}: PropsWithChildren<{}>) => (
    <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    }}>
        {children}
    </div>
)

const Group = ({title, children}: PropsWithChildren<{ title: string }>) => (
    <section>
        <h2>{title}</h2>
        <FlexTiles>
            {children}
        </FlexTiles>
    </section>
)

const PolkaDotLayouts = () => {

    const renderDotLayout = (layout: LayoutName, props: Partial<ShapePatternProps> = {}) => (
        <ExamplePatternTile
            shape={Circle}
            elementWidth={20}
            spacing={60}
            layout={layout}
            {...props}
        />
    );

    return (
        <section>
            <h2>Same Pattern, Different Layout</h2>
            <h3>Square, Triangular, Diagonal, and Custom</h3>
            {renderDotLayout("square")}
            {renderDotLayout("triangular")}
            {renderDotLayout("diagonal", {spacing: 80})}
            {renderDotLayout("square", {spacing: 100, stagger: 0, spacingBetweenRows: 40})}
        </section>
    )
}

const RhombusSizes = () => (
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

const Checkers = () => (
    <Group title="50/50 Checkerboard Tessellations">
        <ExamplePatternTile
            elementWidth={50}
            shape={Square}
            stagger={50}
            spacingBetweenRows={0}
            spacing={50}
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

const Bricks = () => (
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

const Bullseyes = () => (
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

const Layered = () => (
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

const Radial = () => (
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


const Lines = () => (
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

const OverlapLines = () => (
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

const Tessellations = () => (
    <Group title="Filled Tessellations">
        <ExamplePatternTile
            shape={Hexagon}
            spacing={150}
            spacingBetweenRows={43}
            stagger={75}
            elementWidth={100}
            elementProps={{
                strokeWidth: 4,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={Square}
            layout="square"
            elementWidth={50}
            elementProps={{
                strokeWidth: 4,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={Rhombus}
            layout="triangular"
            elementWidth={100}
            elementHeight={50}
            spacingBetweenRows={25}
            elementProps={{
                strokeWidth: 4,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={makePlus(.5)}
            elementWidth={60}
            stagger={30}
            spacingBetweenRows={45}
            elementProps={{
                strokeWidth: 4,
                stroke: randomColor(),
            }}
        />
    </Group>
)

const Negative = () => (
    <Group title="Negative & Positive Space Tessellations">
        <ExamplePatternTile
            shape={Hexagon}
            layout="triangular"
            elementWidth={100}
        />
        <ExamplePatternTile
            shape={Octagon}
            elementWidth={100}
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={Circle}
            elementWidth={50}
        />
        <ExamplePatternTile
            shape={makePlus(.45)}
            elementWidth={60}
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
            }}
        />
    </Group>
)

const AltPolka = () => (
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

export const Outlines = () => (
    <Group title="More Outlines">
        <ExamplePatternTile
            shape={Circle}
            layout="triangular"
            elementWidth={40}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={Circle}
            layout="triangular"
            elementWidth={90}
            spacing={45}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={Circle}
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
            shape={Circle}
            layout="triangular"
            elementWidth={90}
            spacing={79}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={Circle}
            layout="square"
            elementWidth={90}
            spacing={63}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={Square}
            layout="square"
            elementWidth={90}
            spacing={63}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
                rotate: 30
            }}
        />
        <ExamplePatternTile
            shape={Square}
            layout="triangular"
            elementWidth={90}
            spacing={60}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
                rotate: 45,
            }}
        />
        <ExamplePatternTile
            shape={Square}
            layout="diagonal"
            elementWidth={90}
            spacing={63}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
                rotate: 30
            }}
        />
        <ExamplePatternTile
            shape={Triangle}
            layout="diagonal"
            elementWidth={90}
            spacing={61}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
            }}
        />
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
        />
        <ExamplePatternTile
            shape={Triangle}
            layout="triangular"
            elementWidth={70}
            spacing={49}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
                rotate: 45,
            }}
        />
        <ExamplePatternTile
            shape={Rhombus}
            layout="triangular"
            elementWidth={70}
            spacing={60}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={Rhombus}
            layout="square"
            elementWidth={70}
            spacing={50}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={Rhombus}
            layout="diagonal"
            elementWidth={70}
            spacing={50}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={Rhombus}
            layout="diagonal"
            elementWidth={70}
            spacing={55}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={Hexagon}
            layout="diagonal"
            elementWidth={70}
            spacing={55}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
            }}
        />
        <ExamplePatternTile
            shape={Hexagon}
            layout="square"
            elementWidth={70}
            spacing={60}
            spacingBetweenRows={30}
            elementColor="none"
            elementProps={{
                strokeWidth: 2,
                stroke: randomColor(),
            }}
        />
    </Group>
)

const All = () => {

    return (

        <div style={{
            flex: 1,
            overflow: "scroll"
        }}>
            <PolkaDotLayouts/>
            <RhombusSizes/>
            <SpacingHexagons/>
            <Outlines/>
            <Checkers/>
            <Negative/>
            <Tessellations/>
            <Bricks/>
            <Lines/>
            <OverlapLines/>
            <Layered/>
            <Bullseyes/>
            <Radial/>
            <AltPolka/>
        </div>
    )
}

export default All;