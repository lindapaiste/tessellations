import React, { ComponentType } from "react";
import { Point } from "geometric";
import { GetPointsPropsNoSize } from "./types";
import { MaybeGenerate, resolveProp } from "../../util";
import { eitherToPoints } from "./mapProps";
import { Size } from "../../shapes";
import { usePatternSize } from "../usePatternSize";

/**
 * An underlying pattern creator that can be used for complex elements (Concentric, etc.)
 * and used internally by ShapePattern.
 */

/**
 * Props which are created by the Pattern and passed to each element.
 */
export interface PatternCreatesProps {
  center: Point;
  index: number;
}

export type BasePatternProps<P> =
  /**
   * Layout props used to calculate the placement points.
   * Width and height are not required because they can be access from the Background context.
   * But they can be provided to override the size from context.
   */
  GetPointsPropsNoSize &
    Partial<Size> & {
      /**
       * A component to render each element of the pattern.
       */
      Element: ComponentType<P & PatternCreatesProps>;
      /**
       * Must provide all props which are needed by the element,
       * except for those passed down by the pattern.
       *
       * Note: using 'Omit' here requires an assertion in the component which would not be necessary
       * otherwise, but it allows for better type inference when using the Pattern component.
       *
       * TODO: allow elementProps to be left off if there are no additional props required by Element.
       */
      elementProps: MaybeGenerate<
        Omit<P, keyof PatternCreatesProps> & Partial<Size>,
        PatternCreatesProps
      >;
    };

/**
 * Returns a JSX fragment with the SVG elements for each point.
 */
export const Pattern = <P,>({
  Element,
  elementProps,
  ...props
}: BasePatternProps<P>): JSX.Element => {
  /**
   * Use the size from BackgroundContext.
   * If a width and height are explicitly passed, they will override the context.
   */
  const layoutProps: Size & Partial<GetPointsPropsNoSize> =
    usePatternSize(props);
  /**
   * If there is a width and a height on the element, then pass that to the layout.
   * TODO: how to handle function props - separate w/h from others?
   */
  if (typeof elementProps === "object") {
    layoutProps.elementWidth = elementProps.width;
    layoutProps.elementHeight = elementProps.height;
  }
  /**
   * Calculate points.
   */
  const points = eitherToPoints({
    ...layoutProps,
    ...props,
  });
  /**
   * Loop through and render each point.
   */
  return (
    <>
      {points.map((center, index) => (
        <Element
          {...(resolveProp(elementProps, {
            center,
            index,
          }) as P)} // assertion explained in comment
          key={center.join(",")} // create a unique key from the center
          center={center}
          index={index}
        />
      ))}
    </>
  );
};
