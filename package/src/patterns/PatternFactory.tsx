import {GetPointsProps, Size} from "./grid/types";
import React, {ComponentType} from "react";
import {Point} from "geometric";
import {eitherToPoints} from "./grid/mapProps";

export interface PatternElementProps {
    center: Point;
    index: number;
}

export type ElementRenderer = ComponentType<PatternElementProps>;


export interface RenderablePoints {
    points: Point[];

    RenderElement: ElementRenderer;
}

/**
 * returns a JSX fragment with the svg elements for each point
 */
export const ElementArray = ({points, RenderElement}: RenderablePoints) => {
    return (
        <>
            {points.map((point, i) => (
                <RenderElement
                    key={i}
                    center={point}
                    index={i}
                />
            ))}
        </>
    )
}

export type DrawPatternProps<P extends {}> = Size & GetPointsProps & {
    Element: ComponentType<P & PatternElementProps>;
    elementProps: P;
}

/**
 * just the pattern, not the background
 * standardized pattern expects all elements to receive the same props
 */
export const Pattern = <P extends {}>({Element, elementProps, ...props}: DrawPatternProps<P>) => {
    const points = eitherToPoints(props);
    return (
        <ElementArray
            {...props}
            points={points}
            // turn a component into a point renderer by giving it all of the props other than the point
            RenderElement={(receives) => (
                <Element
                    {...elementProps}
                    {...receives}
                />
            )}
        />
    );
}
