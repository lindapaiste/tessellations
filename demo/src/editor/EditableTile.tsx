import { Button, Grid } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React, { useRef } from "react";
import { downloadSVG } from "../util/export";
import { EditorControls } from "./controls/EditorControls";
import { RenderPlaceholder, RenderTile } from "./preview/RenderTile";

const useStyles = makeStyles((theme: Theme) => ({
  previewColumn: {
    marginTop: "2rem",
    flexShrink: 1,
    position: "relative",
    // fill the width below breakpoint
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  previewContent: {
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // style nested svg element
    "& svg": {
      maxWidth: "100%",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      position: "relative",
    },
  },
  button: {
    marginTop: "1rem",
  },
  controls: {
    flexGrow: 1,
    maxWidth: "100%",
  },
}));

export const EditableTile = (): JSX.Element => {
  const classes = useStyles();

  const svgRef = useRef<SVGSVGElement>(null);

  const onClickDownload = () => {
    // need to make sure that the ref is no longer null at the time when this is called
    const svg = svgRef.current;
    if (svg) {
      downloadSVG(svg);
    } else {
      // eslint-disable-next-line no-console
      console.warn("No SVG Element Found.");
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid item className={classes.previewColumn}>
        <RenderPlaceholder />
        <div className={classes.previewContent}>
          <RenderTile ref={svgRef} />
          <Button
            className={classes.button}
            onClick={onClickDownload}
            variant="outlined"
          >
            Download
          </Button>
        </div>
      </Grid>
      <Grid item sm={12} md className={classes.controls}>
        <EditorControls />
      </Grid>
    </Grid>
  );
};
