import React, { useMemo } from "react";
import { useHistory } from "react-router-dom";
import { ExampleTile } from "./ExampleTile";
import { PassedState } from "../../state/slice";
import { patternPropsToSchema } from "../../util/convert";
import { randomColor } from "../../util/random";
import { EXAMPLE_SIZE, PATHS } from "../../util/constants";

/**
 * Clicking on a tile navigates to the editor with that tile's contents pre-loaded.
 * Can have multiple children which are Pattern elements.
 * Gets the editor props from React.Children.
 */
export const EditableLayeredPattern = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element => {
  const history = useHistory<PassedState>();

  const backgroundColor = useMemo(randomColor, []);

  const onClick = () =>
    history.push({
      pathname: PATHS.EDITOR,
      state: {
        background: {
          backgroundColor,
          width: EXAMPLE_SIZE,
          height: EXAMPLE_SIZE,
        },
        layers: React.Children.map(children, (child) =>
          patternPropsToSchema(child.props)
        ),
      },
    });

  return (
    <ExampleTile backgroundColor={backgroundColor} onClick={onClick}>
      {children}
    </ExampleTile>
  );
};
