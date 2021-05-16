import { Grid, Input, InputLabel, Slider } from "@material-ui/core";
import { Theme, makeStyles } from "@material-ui/core/styles";
import React from "react";
import { EditProps } from "../types";

type Props = EditProps<number> & {
  label: string;
  id: string;
  // Note: standard material-ui slider range is 0 to 100
  min?: number;
  max?: number;
};

const useStyles = makeStyles((theme: Theme) => ({
  slider: {
    flex: 1,
  },
  input: {
    width: 60,
    marginLeft: theme.spacing(3),
    "& input": {
      textAlign: "right",
      backgroundColor: "whitesmoke",
      borderRadius: 4,
    },
  },
}));

export const InputSlider = ({
  value,
  onChangeValue,
  label,
  id,
  min,
  max,
}: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <div>
      <InputLabel id={id} shrink>
        {label}
      </InputLabel>
      <Grid container alignItems="center">
        <Slider
          className={classes.slider}
          value={value}
          // note: assertion is safe because array only occurs on a range slider
          onChange={(_, newValue) => onChangeValue(newValue as number)}
          aria-labelledby={id}
          min={min}
          max={max}
        />
        <Input
          className={classes.input}
          value={value}
          onChange={(e) => onChangeValue(Number(e.target.value))}
          inputProps={{
            type: "number",
            "aria-labelledby": id,
            min,
            max,
          }}
        />
      </Grid>
    </div>
  );
};
