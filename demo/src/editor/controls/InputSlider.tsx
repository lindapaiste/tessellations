import { Grid, Input, InputLabel, Slider } from "@material-ui/core";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { clamp } from "lodash";
import React from "react";
import { EditProps } from "../types";

/**
 * InputSlider combines an slider with a number text input,
 * so that the value can be updated either way.
 */
export interface AddedProps {
  label: string;
  id: string;
  // Note: standard material-ui slider range is 0 to 100
  min?: number;
  max?: number;
  disabled?: boolean;
  className?: string;
}

export type InputSliderProps = EditProps<number> & AddedProps;

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
  value = 0,
  onChangeValue,
  label,
  id,
  min = 0,
  max,
  disabled = false,
  className,
}: InputSliderProps): JSX.Element => {
  const classes = useStyles();

  /**
   * Ensure that any number entered in the input is allowed
   * with the given min and max before submitting changes.
   */
  const handleChange = (newValue: number) => {
    const valid = max ? clamp(newValue, min, max) : Math.max(newValue, min);
    onChangeValue(valid);
  };

  return (
    <div className={className}>
      <InputLabel id={id} shrink>
        {label}
      </InputLabel>
      <Grid container alignItems="center">
        <Slider
          className={classes.slider}
          value={value}
          // note: assertion is safe because array only occurs on a range slider
          onChange={(_, newValue) => handleChange(newValue as number)}
          aria-labelledby={id}
          min={min}
          max={max}
          disabled={disabled}
        />
        <Input
          className={classes.input}
          value={value}
          onChange={(e) => handleChange(Number(e.target.value))}
          inputProps={{
            type: "number",
            "aria-labelledby": id,
            min,
            max,
          }}
          disabled={disabled}
        />
      </Grid>
    </div>
  );
};
