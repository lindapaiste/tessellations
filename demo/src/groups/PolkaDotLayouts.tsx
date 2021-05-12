import {LayoutName, ShapePatternProps} from "patterns/patterns";
import {Circle} from "patterns/shapes";
import {Group} from "../helpers/Group";
import React from "react";
import {ExamplePatternTile} from "../helpers/ExamplePatternTile";

export const PolkaDotLayouts = () => {

    const renderDotLayout = (layout: LayoutName, props: Partial<ShapePatternProps> = {}) => (
        <ExamplePatternTile
            shape={Circle}
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
            {renderDotLayout("diagonal", {spacing: 80})}
            {renderDotLayout("square", {spacing: 100, stagger: 0, spacingBetweenRows: 40})}
        </Group>
    )
}