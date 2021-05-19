import { MenuItem, TextField } from "@material-ui/core";
import { startCase } from "lodash";
import { applyLayoutProps } from "patterns/patterns/grid/mapProps";
import React, { useMemo } from "react";
import { selectRawLayout } from "../../state/selectors";
import { updateLayer } from "../../state/slice";
import { useDispatch, useSelector } from "../../state/store";
import { CompleteLayout } from "../../state/types";
import { LAYOUTS } from "../../util/constants";
import { useLayerId } from "../LayerContext";
import { OptionalEditProps } from "../types";
import { ControlSection } from "./ControlSection";
import { InputSlider } from "./InputSlider";
import { OptionalInputSlider } from "./OptionalInputSlider";

export const SectionLayout = (): JSX.Element | null => {
  const id = useLayerId();
  const raw = useSelector(selectRawLayout(id));
  const dispatch = useDispatch();

  const complete = useMemo(
    () =>
      raw
        ? applyLayoutProps({
            // use square as the default
            layout: "square",
            ...raw,
          })
        : undefined,
    [raw]
  );

  if (!raw || !complete) return null;

  const props = <T extends keyof CompleteLayout>(
    property: T
  ): OptionalEditProps<CompleteLayout[T]> => ({
    value: complete[property],
    onChangeValue: (newValue: CompleteLayout[T]) => {
      dispatch(
        updateLayer({
          id,
          changes: { layout: { ...raw, [property]: newValue } },
        })
      );
    },
    checked: raw[property] !== undefined,
    onChangeChecked: (checked: boolean) => {
      const newValue = checked ? complete[property] : undefined;
      dispatch(
        updateLayer({
          id,
          changes: { layout: { ...raw, [property]: newValue } },
        })
      );
    },
    id: `layout-${property}-${id}`,
  });

  return (
    <ControlSection label="Layout">
      <TextField {...props("layout")} select label="Standard Layout">
        {LAYOUTS.map((name) => (
          <MenuItem key={name} value={name}>
            {startCase(name)}
          </MenuItem>
        ))}
      </TextField>
      <InputSlider {...props("spacing")} label="Horizontal Spacing" min={1} />
      <OptionalInputSlider
        {...props("spacingBetweenRows")}
        label="Vertical Spacing"
        min={1}
      />
      <OptionalInputSlider {...props("stagger")} label="Stagger" />
    </ControlSection>
  );
};
