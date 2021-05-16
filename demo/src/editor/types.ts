import {
  BackgroundProps,
  GridOptionalProps,
  GridSpacing,
  LineLayoutProps,
  LineRenderProps,
  ShapeName,
  StandardLayout,
  SvgShapeProps,
} from "patterns/index";
import { SVGAttributes } from "react";

// TODO: support radial and concentric layers

export type PatternSchema = {
  type: "pattern";
  shape: ShapeName;
  // instead of individual props "elementWidth", etc., just put them all under elementProps.
  elementProps: Partial<SvgShapeProps> & {
    width: number;
  };
  layout: (GridSpacing | StandardLayout) &
    Partial<GridSpacing & StandardLayout> &
    GridOptionalProps;
};

export type LineSchema = {
  type: "lines";
  elementProps: LineRenderProps & SVGAttributes<SVGLineElement>;
  layout: LineLayoutProps;
};

export type LayerSchema = PatternSchema & {
  id: string; // unique id
};

export interface Schema {
  background: BackgroundProps;
  layers: LayerSchema[];
}

export interface EditProps<T> {
  value: T;
  onChangeValue: (newValue: T) => void;
}
