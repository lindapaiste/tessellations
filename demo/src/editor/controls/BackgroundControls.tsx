import { Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { setBackgroundColor, setHeight, setWidth } from "../../state/slice";
import { useDispatch, useSelector } from "../../state/store";
import { ColorPicker } from "./ColorPicker";
import { Section } from "./Section";

const useStyles = makeStyles({
  controls: {
    flex: 1,
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      flex: "1 1 29%",
      margin: "2%",
      minWidth: 150,
    },
  },
});

/**
 * Note: not using sliders due to resizing of layout on change, which moves the slider itself.
 */
export const BackgroundControls = (): JSX.Element => {
  const dispatch = useDispatch();
  const { backgroundColor, height, width } = useSelector(
    (state) => state.background
  );

  const classes = useStyles();

  return (
    <Section padding={3}>
      <Typography variant="button" component="h2">
        Background
      </Typography>
      <Grid className={classes.controls}>
        <ColorPicker
          value={backgroundColor || "white"}
          onChangeValue={(v) => dispatch(setBackgroundColor(v))}
          id="bg-color"
        />
        <TextField
          type="number"
          value={width}
          onChange={(e) => dispatch(setWidth(Number(e.target.value)))}
          label="Width"
          id="bg-width"
          inputProps={{
            min: 0,
            step: 50,
          }}
        />
        <TextField
          type="number"
          value={height}
          onChange={(e) => dispatch(setHeight(Number(e.target.value)))}
          label="Height"
          id="bg-height"
          inputProps={{
            min: 0,
            step: 50,
          }}
        />
      </Grid>
    </Section>
  );
};
