import { Meta, Story } from "@storybook/react";
import React from "react";
import { Props, ShapeName, shapeNames, ShapeSvg } from "../shapes";

const meta: Meta<Props> = {
  title: "Patterns/Shape",
  component: ShapeSvg,
  argTypes: {
    fill: { control: "color" },
    shape: {
      control: "select",
      options: shapeNames,
    },
  },
  args: {
    fill: "#3f858e",
    width: 200,
  },
} as Meta;

type ShapeStory = Story<Props>;

const Template: ShapeStory = (args) => <ShapeSvg {...args} />;

export const {
  arrow,
  capsule,
  circle,
  hexagon,
  houndscross,
  houndstooth,
  octagon,
  pentagon,
  plus,
  rectangle,
  rhombus,
  square,
  triangle,
} = Object.fromEntries(
  shapeNames.map((name) => {
    const Shape = Template.bind({});
    Shape.args = {
      shape: name,
    };
    return [name, Shape];
  })
) as Record<ShapeName, ShapeStory>;

export default meta;
