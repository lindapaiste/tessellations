import {Line, Point, pointTranslate} from "geometric";
import {LineDef, LineFromAngle} from "@lindapaiste/geometry/lib/line/types";
import React, {SVGAttributes} from "react";
import {Line as LineObj} from "@lindapaiste/geometry";
import {XYRectangle} from "../grid/types";
import {toRectangleClass} from "@lindapaiste/geometry/lib/rectangle/util";
import {eitherToTuple as toTuple} from "@lindapaiste/geometry/lib/points/convert";

export interface LineRenderProps {
    thickness: number;
    color: string;
}

export interface LineLayoutProps {
    /**
     * spacing goes from center to center so thickness shouldn't matter
     *
     * important: is spacing in the x-direction, or perpendicular to the lines?
     */
    spacing: number;
    /**
     * degrees offset from horizontal in the clockwise direction.  defaults to 0
     */
    angle?: number;
    /**
     * place the first line through this point.  defaults to tile center
     */
    start?: Point;
    /**
     * size of the target tile to cover
     */
    width: number;
    height: number;
}

//TODO: fix stubby ends

const lineRectangleIntersection = (rect: XYRectangle, line: LineDef): Line | null => {
    const rObj = toRectangleClass(rect);
    // const rSides = rectangleSideSegments(rect);
    const lObj = new LineObj(line);

    /**
     * see where the line intersects the sides of the rectangle if they were infinite.
     * then check whether that point is on the rectangle or outside it.
     */
    const possibleIntersects = [
        lObj.pointForX(rObj.x1),
        lObj.pointForX(rObj.x2),
        lObj.pointForY(rObj.y1),
        lObj.pointForY(rObj.y2),
    ];
    const [a, b] = possibleIntersects.filter(point => rObj.contains(point)); // will there be rounding error problems
    // here?
    if (!a) {
        return null;
    } else if (!b) {
        return [toTuple(a), toTuple(a)];
    } else {
        return [toTuple(a), toTuple(b)];
    }
}

const findLines = ({spacing, angle = 0, width, height, start}: LineLayoutProps): Line[] => {

    /**
     * avoid infinite loops
     */
    if (spacing <= 0) {
        throw new Error("Invalid spacing. Spacing must be a number greater than 0.")
    }

    const rect = {
        x: 0,
        y: 0,
        width,
        height,
    };

    /**
     * the maximum visible length of any line is the diagonal
     */
    const diagonalLength = Math.sqrt(width ** 2 + height ** 2);

    /**
     * start line goes through center.  then go left and right until off the edge completely
     */
    const _start: Point = start ?? [.5 * width, .5 * height];
    const firstLine: Line = [_start, pointTranslate(_start, angle, diagonalLength)];
    const firstSegment = lineRectangleIntersection(rect, firstLine);

    let lines: Line[] = firstSegment === null ? [] : [firstSegment];

    const nextLine = (line: Line, plus: boolean): LineFromAngle => {
        const point = pointTranslate(
            line[0],
            angle + (plus ? 90 : -90),
            spacing
        );
        return {point, angle};
    }

    const maxLines = diagonalLength / spacing;
    /**
     * loop through in either the left or right direction to populate the lines array
     */
    const createLines = (plus: boolean) => {
        let current = firstLine;
        for (let i = 0; i <= maxLines / 2; i++) {
            const next = nextLine(current, plus);
            const segment = lineRectangleIntersection(rect, next);
            // break out of the loop once outside the rectangle
            if (segment === null) {
                return;
            }
            lines.push(segment);
            current = segment;
        }
    }

    createLines(true);
    createLines(false);

    return lines;
}

export const ParallelLines = ({color, thickness, ...props}: LineLayoutProps & LineRenderProps) => {

    // TODO: memoize
    const lines = findLines(props);

    return (
        <>
            {lines.map((line, index) => (
                <DrawLine
                    key={index}
                    line={line}
                    strokeWidth={thickness}
                    stroke={color}
                />
            ))}
        </>
    )
}

export const DrawLine = ({line, ...props}: { line: Line } & SVGAttributes<any>) => {
    return (
        <line
            {...props}
            x1={line[0][0]}
            x2={line[1][0]}
            y1={line[0][1]}
            y2={line[1][1]}
        />
    )
}