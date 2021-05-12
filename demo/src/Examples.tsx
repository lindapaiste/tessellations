import React from "react";
import {PolkaDotLayouts} from "./groups/PolkaDotLayouts";
import {RhombusSizes} from "./groups/RhombusSizes";
import {Checkers} from "./groups/Checkers";
import {Bricks} from "./groups/Bricks";
import {Bullseyes} from "./groups/Bullseyes";
import {Layered} from "./groups/Layered";
import {Radial} from "./groups/Radial";
import {Lines} from "./groups/Lines";
import {OverlapLines} from "./groups/OverlapLines";
import {Tessellations} from "./groups/Tessellations";
import {Negative} from "./groups/Negative";
import {AltPolka} from "./groups/AltPolka";
import {SpacingHexagons} from "./groups/SpacingHexagons";
import {Outlines} from "./groups/Outlines";


const All = () => {

    return (

        <div style={{
            flex: 1,
            overflow: "scroll"
        }}>
            <PolkaDotLayouts/>
            <RhombusSizes/>
            <SpacingHexagons/>
            <Outlines/>
            <Checkers/>
            <Negative/>
            <Tessellations/>
            <Bricks/>
            <Lines/>
            <OverlapLines/>
            <Layered/>
            <Bullseyes/>
            <Radial/>
            <AltPolka/>
        </div>
    )
}

export default All;