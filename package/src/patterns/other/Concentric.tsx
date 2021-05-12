import {Circle, SvgShapeProps} from "../../shapes";
import React, {ComponentType, SVGAttributes} from "react";
import {MaybeGenerate} from "../../util";
import {Point} from "geometric";

export interface ConcentricProps {
    /**
     * Define the center point, which is (right now) the center for the whole Concentric and the center for each element.
     */
    center: Point;
    /**
     * An array of hexes in order from inside to outside.
     * Will repeat if there are fewer colors than rings.
     */
    colors: string[];
    /**
     * The count of elements to render.
     */
    rings: number;
    /**
     * the thickness of each ring can be a constant, or a variable dependent on the index.
     */
    ringThickness: MaybeGenerate<number, number>;
    /**
     * Component to render the calculated props for each ring. Defaults to circle.
     */
    RenderRing?: ComponentType<RingProps>;
}

/**
 * Each "ring" of the Concentric gets standard shape props,
 * but also gets a fill color and an index.
 */
export type RingProps = SvgShapeProps & {
    fill: string;
    index: number;
}

/**
 * definitions and adding of ring thickness makes most sense from inside out,
 * but the actual rendering needs to be done from outside in in order for the inner elements to be visible
 * note: height is passed down to RenderRing, so require that if it is defined it must be a number and not a string
 */
export const Concentric = ({
                               center,
                               colors,
                               rings,
                               ringThickness,
                               RenderRing = Circle,
                               ...props
                           }: ConcentricProps & SVGAttributes<any> & { height?: number; rotate?: number }) => {

    let elementProps: RingProps[] = [];

    let cumulativeWidth = 0;

    for (let i = 0; i < rings; i++) {

        const fill = colors[i % colors.length];

        const thickness = typeof ringThickness === "number" ? ringThickness : ringThickness(i); //TODO: also pass
                                                                                                // cumulative width
        cumulativeWidth += thickness;

        elementProps.push({
            fill,
            width: cumulativeWidth,
            center,
            index: i,
        });
    }

    return (
        <>
            {[...elementProps].reverse().map(eProps => (
                <RenderRing
                    {...props}
                    key={eProps.index}
                    {...eProps}
                />
            ))}
        </>
    )
};
