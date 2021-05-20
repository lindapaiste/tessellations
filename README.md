## Pattern Creator

This package of React components enables the creation of complex layered designs from standard geometric shapes.

# Components

## Background

The `<Background>` is the outermost component in a layered pattern. It creates the `<svg>` tag in the DOM and provides the context so that its descendent `<Pattern>` components are aware the `viewbox` size.  The `viewbox` signature is `"0 0 width height"`.

### Props

| Name | Type | Required? | Description |
| --- | --- | --- | --- |
| backgroundColor | `string` | No | If provided, apply a background color to the `<svg>` element. |
| height | `number` | Yes | Intrinsic height in pixels of the `<svg>` element. Will also be used as the `viewbox` height. |
| width | `number` | Yes | Intrinsic width in pixels of the `<svg>` element. Will also be used as the `viewbox` width. |

Also accepts and passes down any props of the underlying DOM `<svg>` element, including `ref`.

## ShapePattern

This is where the magic happens! `<ShapePattern>` takes an "element" and places it repeatedly on a customizable grid.

### Props

| Name | Type | Required? | Description |
| --- | --- | --- | --- |
| elementColor | `string` | No | The color of each shape in the pattern. A shortcut for setting the `fill` property on the `elementProps`. |
| elementHeight | `number` | No | The height of each shape in the pattern.  If not provided, it will multiply the `elementWidth` by the standard height ratio for that shape, which defaults to `1` for a custom shape which does not define any width-to-height mapping.
| elementProps | `object`, `function` | No | The props to pass down to the shape component.  Can be any standard SVG prop such as `fill`, `stroke`, `strokeWidth`. The props can also be defined as a `function` which will be called with the argument `({ center: [number, number]; index: number; })`, allowing for different props on each shape element.
| elementWidth | `number` | Yes | The width of each shape in the pattern. Included shapes can be scaled up to any size. |
| height | `number` | No | Set the height for the total pattern area. If not provided, the height will be the height of the `<Background>` provider, or a default of `100` if there is no `<Background>` ancestor in the tree. |
| layout | `string` | No | One of `"square"`, `"diagonal"`, or `"triangular"`.  Default `"square"`.  The layout name is used for calculating `stagger` and `spacingBetweenRows` based on the value of `spacing`.  It will have no impact if both `stagger` and `spacingBetweenRows` are provided. |
| shape | `string`, Component | Yes | The name of any built-in shape, or a component which receives the standard shape props. |
| spacing | `number` | Yes | The horizontal spacing from the center of one element in a row to the next. Used as the basis for calculating `stagger` and `spacingBetweenRows`. |
| spacingBetweenRows | `number` | No | The vertical distance from the center of one row to the next. If not provided, it will be derived from the `layout` and the `spacing`. Defaults to the value of `spacing` for a `"square"` layout. |
| stagger | `number` | Yes | The number of pixels to shift each row. With each new row, move the elements to the right by this amount. If not provided, it will be derived from the `layout` and the `spacing`. Defaults to `0` for a `"square"` layout. |
| start | `[number, number]` | No | An `[x, y]` point to use as the center of the initial element.  All other positions will be incremented and decremented from this accordingly.
| width | `number` | No | Set the width for the total pattern area. If not provided, the width will be the width of the `<Background>` provider, or a default of `100` if there is no `<Background>` ancestor in the tree. |

# Shapes

This library includes 12 pre-defined shapes which can be called by their string names:

 - "arrow"
 - "circle"
 - "hexagon" 
 - "houndscross" 
 - "houndstooth"
 - "octagon"
 - "pentagon"
 - "plus"
 - "rectangle"
 - "rhombus"
 - "square"
 - "triangle"

It also exports a few helpers which can be used to create custom shapes:
 - `makePlus` for creating plus signs with varying stem widths.
 - `createPolygonShape` for creating a scalable polygon by defining its points in the `viewbox "-0.5 -0.5 1 1"` (a `1` by `1` square centered at `[0,0]`).

### Props

All shapes accept the same standardized props.

| Name | Type | Required? | Description |
| --- | --- | --- | --- |
| center | `[number, number]` | Yes | The `[x,y]` center of the bounding box. In a pattern layout, this prop is calculated by the `ShapePattern`.
| height | `number` | No | The height of the shape.  If not provided, it will be calculated from the `width` based on the ratio defined by the shape.
| rotate | `number` | No |  Degrees of rotation to apply to the shape. Default `0`. |
| width | `number` | Yes | The width of the shape.
They can also accept and pass down any props of the underlying DOM element, such as `<polygon>` or `<ellipse>`. Typical props: `fill`, `stroke`, and `strokeWidth`.