import {Background, BackgroundProps, useBackgroundSize} from "../../background";
import {GridProps, GridSpacing, Size, StandardLayout} from "./types";
import React, {PropsWithChildren} from "react";
import {ShapeComponent, ShapeName, componentByName} from "../../shapes";
import GridPlacements from "./GridPlacements";
import {PatternProps} from "../PatternedTile";
import {getLayoutSpacing} from "./standardLayouts";
import {resolveProp} from "../../util";

/**
 * Create a grid-based pattern from any shape.
 */

export type ShapePatternProps =
    Partial<Size> &
    PatternProps &
    Partial<GridProps> &
    Partial<StandardLayout> & {
    /**
     * Can provide a custom shape render component, or the string name of a pre-defined shape.
     */
    shape: ShapeComponent | ShapeName;
}

export const ShapePattern = ({shape, elementWidth, elementColor, elementProps, ...props}: ShapePatternProps) => {
    /**
     * Handle string shape props.
     */
    const Shape = typeof shape === "string" ? componentByName(shape) : shape;

    /**
     * Use the size from BackgroundContext.
     * If a width and height are explicitly passed, they will override the context.
     */
    const tileSize = useBackgroundSize();
    const width = props.width ?? tileSize.width;
    const height = props.height ?? tileSize.height;

    /**
     * resolve height based on shape standard
     */
    const elementHeight = props.elementHeight ?? Shape.standardHeight?.(elementWidth) ?? elementWidth;

    /**
     * resolve layout spacing based on a combination of passed in arguments and shape defaults
     */
    const spacing = props.spacing ?? elementWidth;

    const fromLayout: Partial<GridSpacing> = props.layout ?
        getLayoutSpacing({spacing, layout: props.layout}) : {};

    const stagger = props.stagger ?? fromLayout.stagger ??
        Shape.getStagger?.({elementWidth, elementHeight, spacing}) ?? 0;

    const spacingBetweenRows = props.spacingBetweenRows ?? fromLayout.spacingBetweenRows ?? elementHeight;

    const gridSpacing = new GridPlacements({
        ...props,
        spacing,
        stagger,
        spacingBetweenRows,
        elementWidth,
        elementHeight,
        width,
        height,
    });

    const points = gridSpacing.getPoints();

    return (
        <>
            {points.map((center, index) => (
                <Shape
                    key={index}
                    center={center}
                    width={elementWidth}
                    height={elementHeight}
                    fill={elementColor}
                    {...resolveProp(elementProps, {index, center})}
                />
            ))}
        </>
    )
}

/**
 * same thing as the pattern, except that it includes the tile around the pattern
 * allow it to take children for easier combination of layers
 * children will be rendered on top
 */
export const ShapePatternTile = ({children, ...props}: PropsWithChildren<ShapePatternProps & BackgroundProps>) => (
    <Background
        {...props}
    >
        <ShapePattern
            {...props}
        />
        {children}
    </Background>
)
