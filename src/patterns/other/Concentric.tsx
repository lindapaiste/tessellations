import React, { FunctionComponent } from "react";
import { Point } from "geometric";
import {
  Circle,
  componentByName,
  ShapeName,
  SvgShapeProps,
} from "../../shapes";
import { MaybeGenerate, resolveProp } from "../../util";

/**
 * The props which are computed by the pattern and passed down to each individual element.
 */
interface ComputedElementProps {
  fill: string;
  width: number;
  center: Point;
  index: number;
}

/**
 * Each 'ring' of the Concentric gets standard shape props,
 * but also gets a fill color and an index.
 */
export type RingProps = SvgShapeProps & ComputedElementProps;

export interface ConcentricProps {
  /**
   * Define the center point, which is (right now) the center for the whole Concentric
   * pattern as well as the center for each element.
   */
  center: Point;
  /**
   * An array of hexes in order from inside to outside.
   * Will repeat if there are fewer colors than count.
   */
  colors: string[];
  /**
   * The count of ring elements to render.
   */
  count: number;
  /**
   * The thickness of each ring can be a constant, or a variable dependent on the index.
   * Thickness describes the margin added on each side of the element.
   */
  thickness: MaybeGenerate<number, number>;
  /**
   * Component to render the calculated props for each ring. Defaults to Circle.
   */
  Element?: FunctionComponent<RingProps> | ShapeName;
  /**
   * Additional props to pass down to each element.
   * Can be an object of props, or a function which receives the ComputedElementProps
   * {width, fill, index, center}
   */
  elementProps?: MaybeGenerate<Partial<RingProps>, ComputedElementProps>;
}

/**
 * Definitions and adding of ring thickness makes most sense from inside out,
 * but the actual rendering needs to be done from outside in in order for the inner
 * elements to be visible since later elements render on top of earlier ones.
 */
export const Concentric = ({
  center,
  colors,
  count,
  thickness,
  Element = Circle,
  elementProps,
}: ConcentricProps): JSX.Element => {
  const RenderRing =
    typeof Element === "string" ? componentByName(Element) : Element;

  const elements: RingProps[] = [];

  let cumulativeWidth = 0;

  for (let i = 0; i < count; i++) {
    const fill = colors[i % colors.length];

    // IDEA: also pass cumulative width to generator function?
    const ringThickness =
      typeof thickness === "number" ? thickness : thickness(i);
    cumulativeWidth += 2 * ringThickness;

    const computedProps = {
      fill,
      width: cumulativeWidth,
      center,
      index: i,
    };
    const additionalProps = elementProps
      ? resolveProp(elementProps, computedProps)
      : {};

    elements.push({
      ...computedProps,
      ...additionalProps,
    });
  }

  return (
    <>
      {[...elements].reverse().map((props) => (
        <RenderRing key={props.index} {...props} />
      ))}
    </>
  );
};
