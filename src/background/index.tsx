import React, {PropsWithChildren, createContext, useContext} from "react";
import {Size} from "../patterns";
import {viewBoxSvgString} from "../shapes/util";

export interface BackgroundProps {
    width: number;
    height: number;
    backgroundColor?: string;
}

const BackgroundContext = createContext({width: 100, height: 100});

export const useBackgroundSize = (): Size => useContext(BackgroundContext);

/**
 * Creates an svg element with a set background color
 * Uses a context object so that child elements can find out about the size of the background/viewbox where they are placed.
 */
export const Background = ({children, ...props}: PropsWithChildren<BackgroundProps>) => {
    return (
        <BackgroundContext.Provider
            value={props}
        >
            <svg
                style={props}
                viewBox={viewBoxSvgString(props)}
            >
                {children}
            </svg>
        </BackgroundContext.Provider>
    )
}
