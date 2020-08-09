import React from "react";
import Arrow from "./Arrow";
import PlacedArrow from "./PlacedArrow";
import { View, TouchableHighlight } from "react-native";

const colors = ["blue", "green", "yellow"];

export default () => {
  //<Arrow color={"green"} />;
  const [rotations, setRotations] = React.useState(colors.map((c, i) => i % 1));

  return (
    <View>
      {colors.map((color, i) => (
        <TouchableHighlight
          onPress={() =>
            setRotations([...rotations].splice(i, 1, rotations[i] + 1))
          }
        >
          <PlacedArrow
            rotation={rotations[i]}
            x={0}
            y={0}
            size={100}
            color={color}
          />
        </TouchableHighlight>
      ))}
    </View>
  );
};

/**
 *   <path
      d="M 0 1 h 1 v -1 l 2 -2 l -2 2 v -1 h -1"
  />
 */
