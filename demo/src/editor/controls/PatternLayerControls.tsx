import {
  Button,
  Grid,
  MenuItem,
  TextField,
  Theme,
  makeStyles,
} from "@material-ui/core";
import { GridSpacing, LayoutName, StandardLayout } from "patterns/patterns";
import { ShapeName, SvgShapeProps } from "patterns/shapes";
import { EntityId } from "@reduxjs/toolkit";
import React from "react";
import { startCase } from "lodash";
import { deleteLayer, layer, updateLayer } from "../../state/slice";
import { useDispatch, useSelector } from "../../state/store";
import { ColorPicker } from "./ColorPicker";
import { ControlSection } from "./ControlSection";
import { InputSlider } from "./InputSlider";
import { LayerSchema } from "../types";
import { PreviewShape } from "../preview/PreviewShape";
import { Section } from "./Section";
import { ShapeIcon } from "../preview/ShapeIcon";
import { LAYOUTS, SHAPE_NAMES } from "../../util/constants";

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

  // TODO: support locking of aspect ratio
  // const [isFixedRatio, setIsFixedRatio] = useState(true);

  if (!props) {
    // eslint-disable-next-line no-console
    console.error(`Invalid layer id ${id}`);
    return null;
  }

  const { layout, elementProps } = props;

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

  const updateLayout = (changes: Partial<GridSpacing & StandardLayout>) => {
    dispatch(
      updateLayer({ id, changes: { layout: { ...layout, ...changes } } })
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
              onChangeValue={(value) => updateElement({ strokeWidth: value })}
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
          {/* <FormControlLabel
                        control={
                            <Checkbox
                                checked={isFixedRatio}
                                onChange={(e) => setIsFixedRatio(e.currentTarget.checked)}
                                color="primary"
                            />
                        }
                        label="Fixed Aspect Ratio"
                    /> */}
          <ControlSection label="Size">
            <InputSlider
              value={elementProps.width ?? 0}
              onChangeValue={(value) => updateElement({ width: value })}
              label="Width"
              id={`element-width-${id}`}
            />
            <InputSlider
              value={elementProps.height ?? 0}
              onChangeValue={(value) => updateElement({ height: value })}
              label="Height"
              id={`element-height-${id}`}
            />
          </ControlSection>

          <ControlSection label="Layout">
            <TextField
              select
              id={`select-layout-${id}`}
              value={props.layout.layout}
              onChange={(e) =>
                updateLayout({ layout: e.target.value as LayoutName })
              }
              label="Standard Layout"
            >
              {LAYOUTS.map((name) => (
                <MenuItem key={name} value={name}>
                  {startCase(name)}
                </MenuItem>
              ))}
            </TextField>
            <InputSlider
              value={layout.spacing ?? 1}
              onChangeValue={(value) => {
                if (value > 0) updateLayout({ spacing: value });
              }}
              label="Horizontal Spacing"
              id={`layout-spacingH-${id}`}
              min={1}
            />
            <InputSlider
              value={layout.spacingBetweenRows ?? 1}
              onChangeValue={(value) => {
                if (value > 0) updateLayout({ spacingBetweenRows: value });
              }}
              label="Vertical Spacing"
              id={`layout-spacingV-${id}`}
              min={1}
            />
            <InputSlider
              value={layout.stagger ?? 0}
              onChangeValue={(value) => updateLayout({ stagger: value })}
              label="Stagger"
              id={`layout-stagger-${id}`}
            />
          </ControlSection>
          <ControlSection label="Transform">
            <InputSlider
              value={elementProps.rotate ?? 0}
              onChangeValue={(value) => updateElement({ rotate: value })}
              label="Rotate"
              id={`element-rotate-${id}`}
              max={360}
            />
            {/* <InputSlider
                        value={elementProps.skew ?? 0}
                        onChangeValue={(value) => updateElement({skew: value})}
                        label="Skew"
                        id={`element-skew-${id}`}
                    /> */}
          </ControlSection>
        </Grid>
      </Grid>
      <Button onClick={() => dispatch(deleteLayer(id))}>Remove Layer</Button>
    </Section>
  );
};
