import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import { HighlightOff } from "@material-ui/icons";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { EditProps } from "../types";

/**
 * Note: <input> with type="color" does not work in Internet Explorer.
 */

type Props = EditProps<string | undefined> & {
  label?: string;
  id: string;
};

const useStyles = makeStyles({
  field: {
    "& ::before": {
      display: "none", // removes underline
    },
  },
  input: {
    minWidth: 75,
    minHeight: 40,
  },
});

export const ColorPicker = ({
  value,
  onChangeValue,
  id,
  label = "Color",
}: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.field}
      label={label}
      id={id}
      value={value === "none" ? "#FFFFFF" : value}
      margin="dense"
      onChange={(e) => onChangeValue(e.target.value)}
      // props for the underlying DOM element
      inputProps={{
        type: "color",
        className: classes.input,
      }}
      // props for the MUI input component
      // eslint-disable-next-line react/jsx-no-duplicate-props
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="remove color"
              onClick={() => onChangeValue("none")}
            >
              <HighlightOff />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
