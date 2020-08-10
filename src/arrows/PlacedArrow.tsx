import React, {useEffect, useRef} from "react";
import {Animated, View} from "react-native";
import Arrow from "./Arrow";

export interface Props {
    color: string;
    rotation: number;
    x: number;
    y: number;
    size: number;
}

export default ({color, rotation, x, y, size}: Props) => {
    const scaleX = rotation % 2 === 1 ? 1 : -1;
    const animation = useRef(new Animated.Value(scaleX)).current;

    useEffect(() => {
        Animated.timing(animation, {
            toValue: scaleX,
            duration: 200,
            useNativeDriver: true
        }).start();
    }, [scaleX, animation]);

    return (
        <Animated.View
            style={{
                transform: [{scaleX: animation}]
            }}
        >
            <View
                style={{
                    width: size,
                    height: size
                }}
            >
                <Arrow color={color}/>
            </View>
        </Animated.View>
    );
};
