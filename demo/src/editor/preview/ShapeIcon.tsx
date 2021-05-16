import React, { ComponentProps } from "react";
import { ShapeName, componentByName } from "patterns/shapes";
import { SvgIcon } from "@material-ui/core";

/**
 * Allows a shape to be used a Material UI icon.
 * Material UI icons expect a 24x24 viewBox.
 */

type Props = ComponentProps<typeof SvgIcon> & {
  shape: ShapeName;
};

export const ShapeIcon = ({ shape, ...props }: Props): JSX.Element => {
  const Component = componentByName(shape);

  return (
    <SvgIcon {...props}>
      <Component center={[12, 12]} width={24} height={24} />
    </SvgIcon>
  );
};
