import Svg, { Path, SvgProps } from "react-native-svg";

export default ({ color, ...props }: { color: string } & SvgProps) => (
  <Svg {...props} viewBox="0 0 2 2">
    <Path fill={color} d="M0 0 v2 L1 1 z" />
  </Svg>
);
