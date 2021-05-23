import { Meta, Story } from "@storybook/react";
import React from "react";
import { Background, BackgroundProps } from "../background";
import { ShapePattern, ShapePatternProps } from "../patterns";
import { layoutNames } from "../patterns/grid/standardLayouts";
import { shapeNames } from "../shapes";

const meta: Meta<ShapePatternProps & BackgroundProps> = {
  title: "Patterns/Shape Pattern",
  component: ShapePattern,
  argTypes: {
    backgroundColor: { control: "color" },
    elementColor: { control: "color" },
    shape: {
      control: "select",
      options: shapeNames,
    },
    layout: {
      control: "select",
      options: layoutNames,
    },
  },
  args: {
    width: 300,
    height: 300,
    layout: "square",
    elementColor: "blue",
  },
};

const Template: Story<ShapePatternProps & BackgroundProps> = ({
  width,
  height,
  ...args
}) => (
  <Background
    backgroundColor="#69d5d5"
    width={width ?? 300}
    height={height ?? 300}
  >
    <ShapePattern {...args} />
  </Background>
);

export const PolkaDots = Template.bind({});
PolkaDots.args = {
  shape: "circle",
  elementWidth: 20,
  layout: "triangular",
  elementColor: "#ffb194",
  backgroundColor: "#5d55e9",
  spacing: 50,
};

export const OverlappingHexagons = Template.bind({});
OverlappingHexagons.args = {
  shape: "hexagon",
  elementWidth: 100,
  spacing: 48,
  layout: "square",
  elementColor: "none",
  elementProps: {
    strokeWidth: 3,
    stroke: "black",
  },
};

export default meta;
