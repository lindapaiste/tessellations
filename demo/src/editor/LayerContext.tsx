import { EntityId } from "@reduxjs/toolkit";
import { createContext, useContext } from "react";

/**
 * Use a React context for the current layer so that the layer id doesn't
 * need to be passed around in form components.
 */

const LayerContext = createContext<EntityId>("");

export const useLayerId = (): EntityId => useContext(LayerContext);

export const { Provider: LayerProvider } = LayerContext;
