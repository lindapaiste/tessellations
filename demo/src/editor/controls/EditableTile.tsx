import { Button, Grid } from "@material-ui/core";
import React, { useRef } from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { EditorControls } from "./EditorControls";
import { RenderTile } from "../preview/RenderTile";
import { downloadSVG } from "../../util/export";

const useStyles = makeStyles((theme: Theme) => ({
  preview: {
    marginTop: "2rem",
    flexShrink: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // style nested svg element
    "& svg": {
      maxWidth: "100%",
      height: "auto",
    },
    // fill the width below breakpoint
    [theme.breakpoints.down("sm")]: {
      width: "100%",
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
      <Grid item className={classes.preview}>
        <RenderTile ref={svgRef} />
        <Button
          className={classes.button}
          onClick={onClickDownload}
          variant="outlined"
        >
          Download
        </Button>
      </Grid>
      <Grid item sm={12} md className={classes.controls}>
        <EditorControls />
      </Grid>
    </Grid>
  );
};
