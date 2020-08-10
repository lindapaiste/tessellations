import React from "react";
import Arrow from "./arrows/Arrow";
import ArrowGrid from "./arrows/ArrowGrid";
import {randomHexes} from "./lib";
import {useChangingColors} from "./universal/useChangingColors";
import RenderGrid from "./universal/RenderGrid";
import Polygon from "./universal/svg/Polygon";
import OctagonGrid from "./octagons/RegularOctagonGrid";
import IrregularOctagonGrid from "./octagons/IrregularOctagonGrid";
import RegularOctagonGrid from "./octagons/RegularOctagonGrid";

export default () => {

    const grid = new RegularOctagonGrid({
        width: 5,
        height: 9,
        tileSize: 200,
    });

    const colors = useChangingColors({
        initialColors: randomHexes(grid.getCount()),
        duration: 1000,
    });

    return (
        <RenderGrid
            grid={grid}
            RenderTile={({index}) => (
                <Polygon
                    color={colors[index]}
                    polygon={grid.getPolygonPoints(index)}
                    viewBox={grid.getViewBox(index)}
                />
            )}
        />
    )
}
