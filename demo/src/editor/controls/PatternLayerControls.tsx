import {
  Button,
  Grid,
  makeStyles,
  MenuItem,
  TextField,
  Theme,
} from "@material-ui/core";
import { EntityId } from "@reduxjs/toolkit";
import { startCase } from "lodash";
import { ShapeName, SvgShapeProps } from "patterns/shapes";
import React from "react";
import { deleteLayer, layer, updateLayer } from "../../state/slice";
import { useDispatch, useSelector } from "../../state/store";
import { LayerSchema } from "../../state/types";
import { SHAPE_NAMES } from "../../util/constants";
import { PreviewShape } from "../preview/PreviewShape";
import { ShapeIcon } from "../preview/ShapeIcon";
import { ColorPicker } from "./ColorPicker";
import { ControlSection } from "./ControlSection";
import { InputSlider } from "./InputSlider";
import { Section } from "./Section";
import { SectionLayout } from "./SectionLayout";

// TODO: checkboxes on height and rotate, input start x and y

const useStyles = makeStyles((theme: Theme) => ({
  shapeIcon: {
    marginRight: theme.spacing(2),
  },
  main: {
    flex: 1,
  },
  shape: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));

export const PatternLayerControls = ({
  id,
}: {
  id: EntityId;
}): JSX.Element | null => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const props = useSelector((state) => layer.selectById(state, id));

  if (!props) {
    // eslint-disable-next-line no-console
    console.error(`Invalid layer id ${id}`);
    return null;
  }

  const { elementProps } = props;

  const update = (changes: Partial<LayerSchema>) => {
    dispatch(updateLayer({ id, changes }));
  };

  const updateElement = (changes: Partial<SvgShapeProps>) => {
    dispatch(
      updateLayer({
        id,
        changes: { elementProps: { ...elementProps, ...changes } },
      })
    );
  };

  return (
    <Section key={id} padding={2}>
      <Grid container>
        <Grid item className={classes.shape}>
          <PreviewShape {...props} />
        </Grid>
        <Grid item xs={12} className={classes.main}>
          <ControlSection label="Shape">
            <TextField
              select
              id={`select-shape-${id}`}
              value={props.shape}
              onChange={(e) => update({ shape: e.target.value as ShapeName })}
              label="Shape"
            >
              {SHAPE_NAMES.map((name) => (
                <MenuItem key={name} value={name}>
                  <ShapeIcon
                    shape={name}
                    color="primary"
                    className={classes.shapeIcon}
                  />
                  {startCase(name)}
                </MenuItem>
              ))}
            </TextField>
            <ColorPicker
              label="Fill Color"
              value={elementProps.fill || "none"}
              onChangeValue={(value) => updateElement({ fill: value })}
              id={`element-color-${id}`}
            />
          </ControlSection>
          <ControlSection label="Outline">
            <InputSlider
              value={+(elementProps.strokeWidth ?? 0)}
              onChangeValue={(value: number) =>
                updateElement({ strokeWidth: value })
              }
              label="Thickness"
              id={`element-strokeWidth-${id}`}
            />
            <ColorPicker
              label="Outline Color"
              value={elementProps.stroke || "none"}
              onChangeValue={(value) => updateElement({ stroke: value })}
              id={`element-stroke-${id}`}
            />
          </ControlSection>
          <ControlSection label="Size">
            <InputSlider
              value={elementProps.width ?? 0}
              onChangeValue={(value: number) => updateElement({ width: value })}
              label="Width"
              id={`element-width-${id}`}
            />
            <InputSlider
              value={elementProps.height ?? 0}
              onChangeValue={(value: number) =>
                updateElement({ height: value })
              }
              label="Height"
              id={`element-height-${id}`}
            />
          </ControlSection>

          <SectionLayout />

          <ControlSection label="Transform">
            <InputSlider
              value={elementProps.rotate ?? 0}
              onChangeValue={(value: number) =>
                updateElement({ rotate: value })
              }
              label="Rotate"
              id={`element-rotate-${id}`}
              max={360}
            />
          </ControlSection>
        </Grid>
      </Grid>
      <Button onClick={() => dispatch(deleteLayer(id))}>Remove Layer</Button>
    </Section>
  );
};
