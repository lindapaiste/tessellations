import React, { forwardRef } from "react";
import { Background } from "patterns/background";
import { RenderLayer } from "./RenderLayer";
import { layer } from "../../state/slice";
import { useSelector } from "../../state/store";

/**
 * Doesn't need any props because all info comes from Redux.
 * Needs to forward a ref to be accessed by the "Download" link.
 */
export const RenderTile = forwardRef<SVGSVGElement, Record<string, unknown>>(
  (_, ref) => {
    const backgroundProps = useSelector((state) => state.background);
    const layerIds = useSelector(layer.selectIds);

    return (
      <Background {...backgroundProps} ref={ref}>
        {layerIds.map((id) => (
          <RenderLayer key={id} id={id} />
        ))}
      </Background>
    );
  }
);
RenderTile.displayName = "RenderTile";
