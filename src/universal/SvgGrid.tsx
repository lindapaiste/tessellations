import {I_GetSvg, I_GridMethods} from "./types";
import React, {ComponentType} from "react";
import {makeRange} from "../lib";
import GridWrapper from "./GridWrapper";
import PositionedRectangle from "./PositionedRectangle";
import Polygon from "./svg/Polygon";

/**
 * if the grid has a getPolygonPoints() method and a getViewBox() method,
 * then don't need to pass a render function because can render
 * with a generic svg component
 */

export interface Props {
    grid: I_GridMethods & I_GetSvg;
    getColor( index: number ): string;
}

export default ({grid, getColor}: Props) => {
    return (
        <GridWrapper
            {...grid.getGridSize()}
        >
            {makeRange(grid.getCount()).map(index => {
                return (
                    <PositionedRectangle
                        key={index}
                        {...grid.getBoundingRect(index)}
                    >
                        <Polygon
                            key={index}
                            polygon={grid.getPolygonPoints(index)}
                            color={getColor(index)}
                        />
                    </PositionedRectangle>
                )
            })}
        </GridWrapper>
    )
}
