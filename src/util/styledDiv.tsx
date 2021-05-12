import React, {CSSProperties} from "react";

/**
 * Helper adds a style to a div element while also allowing custom styles to be provided.
 */
export default <P extends {} = {}>(createStyle: (props: P) => CSSProperties) => {
    // note: create a named function to avoid eslint error re: missing display name
    return function StyledDiv(props: P & JSX.IntrinsicElements['div']) {
        return (
            <div
                {...props}
                style={{
                    ...props.style,
                    ...createStyle(props)
                }}
            />
        )
    }
}