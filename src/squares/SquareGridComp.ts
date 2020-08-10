import {I_GridLayout, I_GridMethods, I_GridProperties, I_Rectangle} from "../universal/types";
import BasicCalc from "../universal/BasicCalc";

export default class SquareGrid implements I_GridLayout {

    public width: number;

    public height: number;

    public tileSize: number;

    private calc: I_GridMethods;

    constructor(props: I_GridProperties) {
        this.height = props.height;
        this.width = props.width;
        this.tileSize = props.tileSize;
        this.calc = new BasicCalc(this);
    }

    getCount(): number {
        return this.calc.getCount();
    }

    getPlacement = this.calc.getPlacement;

    getGridSize = this.calc.getGridSize;

    getPixelPosition = this.calc.getPixelPosition;

    getBoundingRect(index: number): I_Rectangle {
        return this.calc.getBoundingRect(index);
    }
}
