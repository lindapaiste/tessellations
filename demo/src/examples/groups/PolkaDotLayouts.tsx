import { GridSpacing, LayoutName } from "patterns/patterns";
import React from "react";
import { EditablePatternTile } from "../helpers/EditablePatternTile";
import { Group } from "../helpers/Group";

export const PolkaDotLayouts = (): JSX.Element => {
  const renderDotLayout = (
    layout: LayoutName,
    props: Partial<GridSpacing> = {}
  ) => (
    <EditablePatternTile
      shape="circle"
      elementWidth={20}
      spacing={60}
      layout={layout}
      {...props}
    />
  );

  return (
    <Group
      title="Same Pattern, Different Layout"
      subtitle="Square, Triangular, Diagonal, and Custom"
    >
      {renderDotLayout("square")}
      {renderDotLayout("triangular")}
      {renderDotLayout("diagonal", { spacing: 80 })}
      {renderDotLayout("square", {
        spacing: 100,
        stagger: 0,
        spacingBetweenRows: 40,
      })}
      {renderDotLayout("square", {
        spacing: 40,
        stagger: 20,
        spacingBetweenRows: 11,
      })}
      {renderDotLayout("square", {
        spacing: 60,
        stagger: 50,
        spacingBetweenRows: 20,
      })}
    </Group>
  );
};
