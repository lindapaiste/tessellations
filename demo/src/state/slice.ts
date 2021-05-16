import {
  EntityId,
  EntityState,
  PayloadAction,
  Update,
  createEntityAdapter,
  createSlice,
  nanoid,
} from "@reduxjs/toolkit";
import { BackgroundProps } from "patterns/background";
import { last } from "lodash";
import { LayerSchema, PatternSchema } from "../editor/types";
import { randomLayer } from "../util/random";

/* eslint-disable no-param-reassign */

const layerAdapter = createEntityAdapter<LayerSchema>();

export interface EditorState {
  background: BackgroundProps;
  layers: EntityState<LayerSchema>;
}

export interface PassedState {
  background: BackgroundProps;
  layers: PatternSchema[];
}

const initialState: EditorState = {
  background: {
    width: 500,
    height: 500,
    // no color
  },
  // no layers
  layers: layerAdapter.getInitialState(),
};

/**
 * Note: the reason that layers are not their own slice is so that randomLayer can access the width from the background.
 */
const editorSlice = createSlice({
  name: "editor/layers",
  initialState,
  reducers: {
    /**
     * Adds a new pattern layer with a random shape, color, and layout.
     * If there is a previous pattern layer, inherit the layout and spacing so that they line up.
     */
    addRandomLayer: (state) => {
      const newLayer = {
        ...randomLayer(state.background.width),
        id: nanoid(),
      };

      const lastId = last([...state.layers.ids]);
      const lastLayer = lastId ? state.layers.entities[lastId] : undefined;
      if (lastLayer) {
        // note: can't destructure from writable draft
        newLayer.layout = { ...lastLayer.layout };
      }

      layerAdapter.addOne(state.layers, newLayer);
    },
    /**
     * Delete a single layer by id.
     */
    deleteLayer: (state, action: PayloadAction<EntityId>) => {
      layerAdapter.removeOne(state.layers, action.payload);
    },
    /**
     * Generalized update function requires the layer id and the changes.
     */
    updateLayer: (state, action: PayloadAction<Update<LayerSchema>>) => {
      layerAdapter.updateOne(state.layers, action.payload);
    },
    /**
     * Change the color of the background.
     */
    setBackgroundColor: (state, action: PayloadAction<string | undefined>) => {
      state.background.backgroundColor = action.payload;
    },
    /**
     * Change the width of the background.
     */
    setWidth: (state, action: PayloadAction<number>) => {
      state.background.width = action.payload;
    },
    /**
     * Change the height of the background.
     */
    setHeight: (state, action: PayloadAction<number>) => {
      state.background.height = action.payload;
    },
    /**
     * load a state that was passed through the URL.
     */
    load: (state, action: PayloadAction<PassedState>) => {
      state.background = action.payload.background;
      layerAdapter.removeAll(state.layers);
      layerAdapter.addMany(
        state.layers,
        action.payload.layers.map((layer) => ({
          ...layer,
          id: nanoid(),
        }))
      );
    },
  },
});

export const {
  deleteLayer,
  updateLayer,
  addRandomLayer,
  setBackgroundColor,
  setWidth,
  setHeight,
  load,
} = editorSlice.actions;
export const { reducer } = editorSlice;

export const layer = layerAdapter.getSelectors(
  (state: EditorState) => state.layers
);
