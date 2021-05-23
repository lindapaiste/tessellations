import { Meta, Story } from "@storybook/react";
import React from "react";
import { Background } from "../background";
import { Concentric, ConcentricProps } from "../patterns";
import { Circle, shapeNames } from "../shapes";

const meta: Meta<ConcentricProps> = {
  title: "Patterns/Concentric",
  component: Concentric,
  argTypes: {
    Element: {
      control: "select",
      options: shapeNames,
    },
  },
  args: {
    Element: Circle,
    center: [150, 150],
  },
};

/**
 * Use a standard viewBox and predefined center and
 * handle scaling with the CSS.
 */
const Template: Story<ConcentricProps> = (args) => (
  <Background width={300} height={300}>
    <Concentric {...args} />
  </Background>
);

export const BullsEye = Template.bind({});
BullsEye.args = {
  Element: "circle",
  colors: ["red", "green"],
  count: 10,
  thickness: 15,
};

export const SquareOutlines = Template.bind({});
SquareOutlines.args = {
  Element: "square",
  colors: ["none"],
  count: 9,
  thickness: 15,
  elementProps: {
    strokeWidth: 2,
    stroke: "black",
  },
};

export default meta;
