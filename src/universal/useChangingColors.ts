import {useState} from "react";
import {randomInt, replaceIndex} from "../lib";
import chroma from "chroma-js";
import useInterval from "../lib/useInterval";

/**
 * takes an array of colors and changes one color in a random position every {duration} milliseconds
 * by default changes to a random color, but can pass a nextColor generator function
 * which receives the index of the color to change as well as its current value
 */

export interface Props {
    duration: number;
    initialColors: string[];

    nextColor?(index: number, color: string): string;
}

export const useChangingColors = ({duration, initialColors, nextColor = () => chroma.random().hex()}: Props): string[] => {
    const [colors, setColors] = useState(initialColors);

    const changeColor = () => {
        const index = randomInt(colors.length);
        setColors(
            colors => replaceIndex(colors, index, nextColor(index, colors[index]))
        )
    };

    useInterval(changeColor, duration);

    return colors;
}
