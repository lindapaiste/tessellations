import {Background, BackgroundProps} from "../background";
import {MaybeGenerate, resolveProp} from "../util";
import React, {ComponentType} from "react";
import {ElementArray} from "./PatternFactory";
import {GetPointsProps} from "./grid/types";
import {Point} from "geometric";
import {SvgShapeProps} from "../shapes";
import {eitherToPoints} from "./grid/mapProps";

export interface DecoratedTileProps extends PatternProps, BackgroundProps {
}

export interface PatternProps {
    elementColor?: string;
    elementWidth: number;
    elementHeight?: number;
    /**
     * can optionally pass through extra props to each element
     * these can be dependent on the index and location
     * width/height/fill here will override the default
     */
    elementProps?: MaybeGenerate<Partial<SvgShapeProps>, { index: number, center: Point }>;
}

export type TileFactoryProps = DecoratedTileProps & GetPointsProps;

export type PatternedTileProps = TileFactoryProps & {
    Element: ComponentType<SvgShapeProps & { index: number }>;
}

/**
 * simplified version combines background and pattern when there is only one pattern
 *
 * handles width/height naming collision by taking props elementWidth and elementHeight, but renames them before
 * passing down to the element render
 */
export const PatternedTile = ({
                                  elementColor,
                                  elementHeight,
                                  elementWidth,
                                  elementProps,
                                  Element,
                                  ...props
                              }: PatternedTileProps) => {
    const points = eitherToPoints(props);
    return (
        <Background {...props}>
            <ElementArray
                {...props}
                points={points}
                RenderElement={(eProps) => (
                    <Element
                        {...eProps}
                        width={elementWidth}
                        height={elementHeight}
                        fill={elementColor}
                        {...resolveProp(elementProps, eProps)}
                    />
                )}
            />
        </Background>
    )
}
