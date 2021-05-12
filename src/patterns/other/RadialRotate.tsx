import React, {ComponentType} from "react";
import {Property} from "csstype";
import {makeRange} from "../../util";

/**
 * need to rewrite this for native because transform definitions are different
 */

export interface RadialLayoutProps {
    count: number;
}

export type RadialRotateProps<P extends {}> = RadialLayoutProps & {
    Element: ComponentType<P & { style: CreatedStyle }>;
    elementProps: P;
}

type CreatedStyle = {
    transform?: Property.Transform;
    transformOrigin?: Property.TransformOrigin;
}

export const createStyle = (i: number, count: number): CreatedStyle => ({
    transformOrigin: "center",
    transform: `rotate(${i * 360 / count}deg)`,
});

/**
 * can calculate the rotation myself, or can make use of CSS transforms
 *
 * CSS will always rotate based on the center of the parent svg
 *
 * what if I use children instead of a render prop?
 */
export const RadialRotate = <P extends {}>({Element, elementProps, count}: RadialRotateProps<P>) => {
    return (
        <>
            {makeRange(count).map(i => (
                <Element
                    key={i}
                    {...elementProps}
                    style={createStyle(i, count)} //can combine style
                />
            ))}
        </>
    )
}
