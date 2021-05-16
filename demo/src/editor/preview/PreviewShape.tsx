import React from "react";
import { ShapeSvg } from "patterns/shapes";
import { makeStyles } from "@material-ui/core/styles";
import { LayerSchema } from "../types";

/**
 * Render a single shape from the Pattern layer.
 * Show the shape at its actual size up to 100px and shrink to fit if larger.
 *
 * TODO: fix overflow errors when shape is rotated or skewed or has thick outline
 */

const useStyles = makeStyles(() => ({
  wrapper: {
    width: 100,
    display: "flex",
    justifyContent: "center",
  },
  svg: {
    maxWidth: "100%",
    width: "auto",
    height: "auto",
  },
}));

export const PreviewShape = ({
  shape,
  elementProps,
}: LayerSchema): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <ShapeSvg shape={shape} {...elementProps} />
    </div>
  );
};
