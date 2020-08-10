import {I_GridMethods} from "./types";
import React, {ComponentType} from "react";
import {makeRange} from "../lib";
import GridWrapper from "./GridWrapper";
import PositionedRectangle from "./PositionedRectangle";

/**
 * in this version, positioning and sizing of the rectangle is done here
 * therefore RenderTile just needs the tile index (but could pass additional?)
 */

export interface Props {
    grid: I_GridMethods;
    RenderTile: ComponentType<{ index: number }>;
}

export default ({grid, RenderTile}: Props) => {
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
                        <RenderTile
                            key={index}
                            index={index}
                        />
                    </PositionedRectangle>
                )
            })}
        </GridWrapper>
    )
}
