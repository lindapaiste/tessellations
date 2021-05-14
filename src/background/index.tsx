import React, {createContext, forwardRef, PropsWithChildren, useContext} from "react";
import {viewBoxSvgString} from "../shapes/util";

export interface BackgroundProps {
    width: number;
    height: number;
    backgroundColor?: string;
}

const BackgroundContext = createContext<BackgroundProps>({width: 100, height: 100});

export const useBackgroundSize = () => useContext(BackgroundContext);

/**
 * Creates an svg element with a set background color
 * Uses a context object so that child elements can find out about the size of the background/viewbox where they are placed.
 *
 * Forwards a ref to the <svg> element.
 *
 * TODO: investigate pros and cons of setting the background through style: backgroundColor vs <rect>
 */
export const Background = forwardRef<SVGSVGElement, PropsWithChildren<BackgroundProps & JSX.IntrinsicElements['svg']>>(({children, ...props}, ref) => {
    const {width, height, backgroundColor, ...rest} = props;
    return (
        <BackgroundContext.Provider
            value={props}
        >
            <svg
                {...rest}
                ref={ref}
                viewBox={viewBoxSvgString({width, height})}
                width={width}
                height={height}
            >
                {backgroundColor !== undefined && (
                    <rect
                        width={width}
                        height={height}
                        fill={backgroundColor}
                    />
                )}
                {children}
            </svg>
        </BackgroundContext.Provider>
    )
});
