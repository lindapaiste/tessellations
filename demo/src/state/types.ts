import {
  BackgroundProps,
  GridOptionalProps,
  GridSpacing,
  ShapeName,
  StandardLayout,
  SvgShapeProps,
} from "patterns/index";

/**
 * Note: going from state to component is easier if properties are grouped
 * as layout and elementProps.
 * But updating in Redux is easier if all properties are flat.
 */

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

export type LayerSchema = PatternSchema & {
  id: string; // unique id
};

export interface Schema {
  background: BackgroundProps;
  layers: LayerSchema[];
}
