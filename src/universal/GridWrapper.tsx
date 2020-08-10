import React, {PropsWithChildren} from "react";
import {View, ViewProps} from "react-native";
import {I_Sized} from "./types";

/**
 * grid wrapper is a fixed-size View
 * with position=relative so that tiles can use absolute positioning
 */

/**
 * takes the gridSize - height and width - as a prop
 */


export default (props: I_Sized & PropsWithChildren<ViewProps>) => (
    <View
        {...props}
        style={[
            props.style,
            {
                width: props.width,
                height: props.height,
                position: "relative",
            }
        ]}
    />
)
