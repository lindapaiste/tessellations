import { TextField } from "@material-ui/core";
import React, { PropsWithChildren } from "react";
import { EditProps } from "../types";

/**
 * Wrapper around TextField drops unneeded props (checked, onChangeChecked)
 * before they get passed down to the DOM
 */
type Props<T> = PropsWithChildren<
  EditProps<T> & {
    label: string;
  }
>;

export const Dropdown = <T extends string>({
  id,
  value,
  onChangeValue,
  children,
  label,
}: Props<T>): JSX.Element => (
  <TextField
    label={label}
    select
    value={value}
    id={id}
    onChange={(e) => onChangeValue(e.target.value as T)}
  >
    {children}
  </TextField>
);
