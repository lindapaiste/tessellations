import React, {PropsWithChildren} from "react";
import {View, ViewProps} from "react-native";
import {I_Rectangle} from "./types";

/**
 * places an View of the specified size at the specified position
 * not supporting animated here since position is not supported by native driver
 * wrap in another view with a translation in order to animated
 */

export default (props: I_Rectangle & PropsWithChildren<ViewProps>) => (
    <View
        {...props}
        style={[
            props.style,
            {
                position: "absolute",
                top: props.y,
                left: props.x,
                width: props.width,
                height: props.height,
            }
        ]}
    />
)
