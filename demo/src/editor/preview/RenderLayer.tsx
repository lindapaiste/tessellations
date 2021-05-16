import { EntityId } from "@reduxjs/toolkit";
import React from "react";
import { ShapePattern } from "patterns/patterns";
import { layer } from "../../state/slice";
import { schemaToPatternProps } from "../../util/convert";
import { useSelector } from "../../state/store";

/**
 * Rendering a layer just requires the id.
 * Layer props are accessed from Redux.
 * TODO: Should it throw errors or fail silently?
 */
export const RenderLayer = ({ id }: { id: EntityId }): JSX.Element | null => {
  const props = useSelector((state) => layer.selectById(state, id));

  if (!props) {
    // eslint-disable-next-line no-console
    console.error(`Invalid layer id ${id}`);
    return null;
  }

  // right now "pattern" is the only supported type
  switch (props.type) {
    case "pattern": {
      return <ShapePattern {...schemaToPatternProps(props)} />;
    }
    default:
      // eslint-disable-next-line no-console
      console.error(`Unknown layer type ${props.type}`);
      return null;
  }
};
