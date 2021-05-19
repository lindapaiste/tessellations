import { EntityId } from "@reduxjs/toolkit";
import { EditorState } from "./slice";
import { PatternSchema } from "./types";

export const selectRawLayout =
  (id: EntityId) =>
  (state: EditorState): undefined | PatternSchema["layout"] => {
    const layer = state.layers.entities[id];
    return layer?.layout;
  };
