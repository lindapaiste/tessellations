import React, { MouseEventHandler, PropsWithChildren } from "react";
import { Background } from "patterns/background";
import { Paper } from "@material-ui/core";
import { EXAMPLE_SIZE } from "../../util/constants";
import { randomColor } from "../../util/random";

interface Props {
  onClick?: MouseEventHandler;
  backgroundColor?: string;
}

/**
 * Loads a 300x300px tile background with a random color.
 * If a color is passed from props, use that color.
 * This is needed in order to pass the background color when navigating.
 */
export const ExampleTile = ({
  children,
  onClick,
  backgroundColor,
}: PropsWithChildren<Props>): JSX.Element => (
  <Paper
    elevation={3}
    style={{ height: EXAMPLE_SIZE, overflow: "hidden", margin: 10 }}
    onClick={onClick}
  >
    <Background
      width={EXAMPLE_SIZE}
      height={EXAMPLE_SIZE}
      backgroundColor={backgroundColor ?? randomColor()}
    >
      {children}
    </Background>
  </Paper>
);
