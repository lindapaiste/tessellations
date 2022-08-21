import React from "react";
import { Bricks } from "./groups/Bricks";
import { Bullseyes } from "./groups/Bullseyes";
import { Checkers } from "./groups/Checkers";
import { Escher } from "./groups/Escher";
import { Layered } from "./groups/Layered";
import { Lines } from "./groups/Lines";
import { Negative } from "./groups/Negative";
import { Outlines } from "./groups/Outlines";
import { OverlapLines } from "./groups/OverlapLines";
import { PolkaDotLayouts } from "./groups/PolkaDotLayouts";
import { Radial } from "./groups/Radial";
import { RhombusSizes } from "./groups/RhombusSizes";
import { Scales } from "./groups/Scales";
import { SpacingHexagons } from "./groups/SpacingHexagons";
import { Tessellations } from "./groups/Tessellations";

export default function Examples(): JSX.Element {
  return (
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
      <Escher />
      <Scales />
      <Lines />
      <OverlapLines />
      <Layered />
      <Bullseyes />
      <Radial />
    </div>
  );
}
