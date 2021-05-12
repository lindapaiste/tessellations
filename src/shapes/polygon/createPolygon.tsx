import {MaybeGenerate, resolveProp} from "../../util";
import {ShapeComponent, SvgShapeProps} from "../types";
import {Point} from "geometric";
import React from "react";
import {createPointsString} from "../util";


export interface PolygonSchema {
    /**
     * A constant to multiply by the width to get the height, if the height is not explicitly defined
     */
    heightRatio: number;
    /**
     * Base definition for the shape with width = 1, height = 1, and center = [0,0]
     */
    shape: Point[];
}

/**
 * Factory props are probably constant, but allow them to be derived from instance props too
 */
export interface ResolvableSchema {
    heightRatio: MaybeGenerate<number, SvgShapeProps>;
    shape: MaybeGenerate<Point[], SvgShapeProps>;
}

const resolveSchema = (schema: ResolvableSchema, props: SvgShapeProps): PolygonSchema => ({
    shape: resolveProp(schema.shape, props),
    heightRatio: resolveProp(schema.heightRatio, props),
})

/**
 * Factory function allows for creating specific instances of <polygon> for each shape,
 * while cutting back on duplicated logic
 *
 * just the SVG shape, not wrapped in an SVG tag
 */
const createPolygonRender = (schema: ResolvableSchema) =>
    (props: SvgShapeProps) => {
        const {shape, heightRatio} = resolveSchema(schema, props);
        // pass down only props which are extra
        const {width, height, rotate, center, ...passedDown} = props;
        const points = createPointsString(shape, {width, height, rotate, center}, heightRatio);

        return (
            <polygon
                {...passedDown}
                points={points}
            />
        )
    }

/**
 * Convert a PolygonSchema definition to a standardized ShapeComponent, which applies to non-polygon shapes (like circles).
 */
export const createPolygonShape = (schema: PolygonSchema) => {
    const Render: ShapeComponent = createPolygonRender(schema);
    Render.standardHeight = (width) => width * schema.heightRatio;
    // pass through extra props to access them from the shape
    // Render.shape = schema.shape;
    return Render;
}
// TODO: set displayName property.