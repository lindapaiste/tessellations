import React, {FunctionComponent, PropsWithChildren} from "react";
import {StyleProp, View, ViewProps, ViewStyle} from "react-native";
import {GeneratorType, MaybeGenerate, resolveProp} from "./index";

/**
 * HOC which applies a style to a View Component
 */
type Style = StyleProp<ViewStyle>;

export const makeStyledView = <M extends MaybeGenerate<Style, any>>(mapper: M): FunctionComponent<ViewProps & GeneratorType<M>> =>
    (props) => (
        <View
            {...props as PropsWithChildren<ViewProps>}
            style={[
                props.style,
                resolveProp(mapper, props)
            ]}
        />
    )
