import {DecoratedTileProps, PatternedTile} from "../PatternedTile";
import React from "react";
import {Rectangle} from "../../shapes";

/**
 * can use "diagonal" points layout for placement with spacing checkWidth * Math.sqrt(2)
 * but pass in custom topLeft, otherwise left and right sides have half checks
 */
export const CheckerTile = (props: DecoratedTileProps) => {
    const checkWidth = props.elementWidth;
    const checkHeight = props.elementHeight || props.elementWidth;
    return (
        <PatternedTile
            spacing={2 * checkWidth}
            spacingBetweenRows={checkHeight}
            stagger={checkWidth}
            start={[.5 * checkWidth, .5 * checkHeight]}
            {...props}
            Element={Rectangle}
        />
    )
};