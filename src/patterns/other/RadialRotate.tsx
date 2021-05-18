import React, { ComponentType, CSSProperties } from "react";
import { makeRange } from "../../util";

/**
 * Rotates shapes around the center of the parent SVG Background.
 *
 * Uses CSS transforms rather than doing any math.
 *
 * IDEA: rotate around an arbitrary defined point.
 */

export interface RadialLayoutProps {
  count: number;
}

type CreatedStyle = Required<
  Pick<CSSProperties, "transform" | "transformOrigin">
>;

export type RadialRotateProps<P> = RadialLayoutProps & {
  Element: ComponentType<P & { style: CreatedStyle }>;
  elementProps: P;
};

export const createStyle = (i: number, count: number): CreatedStyle => ({
  transformOrigin: "center",
  transform: `rotate(${(i * 360) / count}deg)`,
});

export const RadialRotate = <P,>({
  Element,
  elementProps,
  count,
}: RadialRotateProps<P>): JSX.Element => (
  <>
    {makeRange(count).map((i) => (
      <Element
        key={i}
        {...elementProps}
        style={createStyle(i, count)} // can combine style
      />
    ))}
  </>
);

/**
 * Note: would need to rewrite this for native because transform definitions are different
 */
