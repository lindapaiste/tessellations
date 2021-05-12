import React, {PropsWithChildren} from "react";
import {ShapePatternProps, ShapePatternTile} from "patterns/patterns";
import {makeProps} from "./MakeProps";

export const ExamplePatternTile = (props: PropsWithChildren<ShapePatternProps>) => (
    <ShapePatternTile
        {...makeProps()}
        {...props}
    />
)