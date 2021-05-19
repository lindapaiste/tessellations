import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Checkbox } from "@material-ui/core";
import { InputSlider, InputSliderProps } from "./InputSlider";

/**
 * Combine an InputSlider with a checkbox that
 * disables the input when unchecked.
 */

type Props = Omit<InputSliderProps, "disabled"> & {
  checked: boolean;
  onChangeChecked: (checked: boolean) => void;
};

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "row",
  },
  checkbox: {
    padding: 0,
    marginRight: "5%",
  },
  input: {
    flex: 1,
  },
});

export const OptionalInputSlider = ({
  checked,
  onChangeChecked,
  ...props
}: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Checkbox
        className={classes.checkbox}
        checked={checked}
        onChange={(e) => onChangeChecked(e.target.checked)}
        id={`${props.id}-checkbox`}
        color="primary"
      />
      <InputSlider {...props} className={classes.input} disabled={!checked} />
    </div>
  );
};
