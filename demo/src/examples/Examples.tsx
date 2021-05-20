import React from "react";
import { AltPolka } from "./groups/AltPolka";
import { Bricks } from "./groups/Bricks";
import { Bullseyes } from "./groups/Bullseyes";
import { Checkers } from "./groups/Checkers";
import { Layered } from "./groups/Layered";
import { Lines } from "./groups/Lines";
import { Negative } from "./groups/Negative";
import { Outlines } from "./groups/Outlines";
import { OverlapLines } from "./groups/OverlapLines";
import { PolkaDotLayouts } from "./groups/PolkaDotLayouts";
import { Radial } from "./groups/Radial";
import { RhombusSizes } from "./groups/RhombusSizes";
import { SpacingHexagons } from "./groups/SpacingHexagons";
import { Tessellations } from "./groups/Tessellations";

export const Examples = (): JSX.Element => (
  <div
    style={{
      flex: 1,
    }}
  >
    <PolkaDotLayouts />
    <RhombusSizes />
    <SpacingHexagons />
    <Outlines />
    <Checkers />
    <Negative />
    <Tessellations />
    <Bricks />
    <Lines />
    <OverlapLines />
    <Layered />
    <Bullseyes />
    <Radial />
    <AltPolka />
  </div>
);
