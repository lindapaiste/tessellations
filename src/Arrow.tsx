import React from "react";

export default ({ color, ...props }: { color: string }) => (
  <svg viewBox="0 0 4 4">
    <polygon points="0,1 2,1 2,0 4,2 2,4 2,3 0,3" fill={color} />
  </svg>
);
