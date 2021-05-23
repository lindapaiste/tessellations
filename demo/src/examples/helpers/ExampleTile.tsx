import { makeStyles } from "@material-ui/core/styles";
import React, { MouseEventHandler, PropsWithChildren } from "react";
import { Background } from "patterns/background";
import { EXAMPLE_SIZE } from "../../util/constants";
import { randomColor } from "../../util/random";

interface Props {
  onClick?: MouseEventHandler;
  backgroundColor?: string;
  title?: string;
}

const useStyles = makeStyles((theme) => ({
  tile: {
    overflow: "hidden",
    margin: 10,
    borderRadius: 5,
    boxShadow: theme.shadows[5],
  },
}));

/**
 * Loads a 300x300px tile background with a random color.
 * If a color is passed from props, use that color.
 * This is needed in order to pass the background color when navigating.
 */
export const ExampleTile = ({
  children,
  onClick,
  backgroundColor,
  title,
}: PropsWithChildren<Props>): JSX.Element => {
  const classes = useStyles();
  return (
    <Background
      width={EXAMPLE_SIZE}
      height={EXAMPLE_SIZE}
      backgroundColor={backgroundColor ?? randomColor()}
      onClick={onClick}
      className={classes.tile}
      title={title}
    >
      {children}
    </Background>
  );
};
