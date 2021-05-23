import { DeepPartial } from "@reduxjs/toolkit";
import React, { FC, ReactElement } from "react";
import {
  render as rtlRender,
  RenderOptions,
  RenderResult,
  Queries,
  queries,
} from "@testing-library/react";
import { Provider as ReduxProvider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { LocationDescriptor } from "history";
import { StoreType, RootState, createStore } from "../state/store";

/**
 * Wrap all tests elements in a Redux store provider and a React Router DOM provider.
 * Can be customized by setting the options when calling render().
 */

type ExtraOptions = {
  /**
   * Can provide a complete or partial initial state.
   */
  initialState?: DeepPartial<RootState>;
  /**
   * Can provide a store instance to test.
   */
  store?: StoreType;
  /**
   * Can set the initial location fot the page.
   */
  location?: LocationDescriptor;
};

const render = <
  // supports generics for Queries and Container
  // copied types from RTL version
  Q extends Queries = typeof queries,
  C extends Element | DocumentFragment = HTMLElement
>(
  ui: ReactElement,
  // options argument includes the additional redux options
  options: ExtraOptions & RenderOptions<Q, C> = {}
): // returns the standard result plus a store property
RenderResult<Q, C> & { store: StoreType } => {
  // destructure additional properties from the options and set defaults
  const {
    initialState = undefined,
    // call create store function for this specific store
    store = createStore(initialState),
    location,
    ...renderOptions
  } = options;

  // define a new Wrapper which includes a redux store Provider
  // and a react-router Memory router
  // Note: is an MUI theme provider needed?
  const Wrapper: FC = ({ children }) => (
    <MemoryRouter initialEntries={location ? [location] : undefined}>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </MemoryRouter>
  );

  return {
    // call the regular RTL render function
    ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
    // return store alongside the the other return values
    store,
  };
};

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };

/**
 * Cannot just use the inputs from material UI select, slider, etc. directly
 * because the component itself is a <div>, but it should contain a
 * hidden <input> with the actual value, either as a child or sibling.
 */
export const inputElement = (element: HTMLElement): HTMLInputElement => {
  const input =
    element instanceof HTMLInputElement
      ? element
      : element.parentElement?.querySelector("input");
  if (!input) {
    throw new Error(`No input element found in ${element.outerHTML}`);
  }
  return input;
};

export const inputValue = (element: HTMLElement): string =>
  inputElement(element).value;
