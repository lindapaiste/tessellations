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

/**
 * Note: going from state to component is easier if properties are grouped
 * as layout and elementProps.
 * But updating in Redux is easier if all properties are flat.
 */
type FlatPatternSchema = StandardLayout &
  Partial<GridSpacing> & {
    shape: ShapeName;
    startX?: number;
    startY?: number;
    elementWidth: number;
    elementHeight?: number;
    // container for props which can only appear from router state.
    type: "pattern";
    // instead of individual props "elementWidth", etc., just put them all under elementProps.
    extraProps: Partial<SvgShapeProps>;
  };

// TODO: support radial and concentric layers

export type CompleteLayout = Required<GridSpacing & StandardLayout>;

export type LayoutState = {
  [K in keyof CompleteLayout]: {
    value: CompleteLayout[K];
    disabled: boolean;
  };
};

export type PatternSchema = {
  type: "pattern";
  shape: ShapeName;
  // instead of individual props "elementWidth", etc., just put them all under elementProps.
  elementProps: Partial<SvgShapeProps> & {
    width: number;
  };
  layout: (GridSpacing | StandardLayout) &
    Partial<CompleteLayout> &
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
