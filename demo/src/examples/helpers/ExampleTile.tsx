import { makeStyles } from "@material-ui/core/styles";
import { Background } from "patterns/background";
import React, { MouseEventHandler, PropsWithChildren } from "react";
import { EXAMPLE_SIZE } from "../../util/constants";
import { randomColor } from "../../util/random";

interface Props {
  onClick?: MouseEventHandler;
  backgroundColor?: string;
  title?: string;
}

const useStyles = makeStyles((theme) => ({
  square: {
    overflow: "hidden",
    margin: 10,
    borderRadius: 5,
    boxShadow: theme.shadows[5],
    flexGrow: 1,
    maxHeight: "90vh",
  },
  svg: {
    width: "100%",
    height: "auto",
    marginBottom: -5, // this fixes the infuriating whitespace bug
  },
}));

/**
 * Loads a 300x300px tile background with a random color.
 * If a color is passed from props, use that color.
 * This is needed in order to pass the background color when navigating.
 *
 * Use a separate wrapper div to fix issues with scaling/overflow on iOS.
 */
export const ExampleTile = ({
  children,
  onClick,
  backgroundColor,
  title,
}: PropsWithChildren<Props>): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.square}>
      <Background
        width={EXAMPLE_SIZE}
        height={EXAMPLE_SIZE}
        backgroundColor={backgroundColor ?? randomColor()}
        onClick={onClick}
        className={classes.svg}
        title={title}
      >
        {children}
      </Background>
    </div>
  );
};
