import {randomColor} from "../randomColor";

/**
 * Helper to pass standard props to an example tile.
 * It's a function instead of a constant so that it loads different colors for each tile.
 */
export const makeProps = () => ({
    width: 300,
    height: 300,
    elementColor: randomColor(),
    backgroundColor: randomColor(),
});