import { DeepPartial, configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch as _useDispatch,
  useSelector as _useSelector,
} from "react-redux";
import { EditorState, reducer } from "./slice";

/**
 * Function can be used to create a store with some values already defined.
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createStore = (preloadedState?: DeepPartial<EditorState>) => {
  return configureStore({
    preloadedState,
    reducer,
    // don't need thunk, so can remove the middleware
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: false,
      }),
  });
};

// Infer typescript types from the store.
export type StoreType = ReturnType<typeof createStore>;
export type DispatchType = StoreType["dispatch"];

// Apply typescript types to hooks.
export const useSelector: TypedUseSelectorHook<EditorState> = _useSelector;
export const useDispatch: () => DispatchType = _useDispatch;
