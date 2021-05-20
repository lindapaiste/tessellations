import {
  MuiThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import { NavigationTabs } from "./navigation/Tabs";
import { Routing } from "./navigation/Routing";
import { createStore } from "./state/store";

/**
 * Primary App component sets up providers for react-redux, react-router, and theme.
 */

// instantiate a single redux store instance
const store = createStore();

// create material ui theme
const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: "#80dcb8",
      },
      secondary: {
        main: "#5c42e7",
      },
    },
    typography: {
      h1: {
        fontSize: "3rem",
      },
      h2: {
        fontSize: "2.5rem",
      },
      h3: {
        fontSize: "2rem",
      },
      h4: {
        fontSize: "1.75rem",
      },
      h5: {
        fontSize: "1.5rem",
      },
      h6: {
        fontSize: "1.25rem",
      },
    },
  })
);

export const App = (): JSX.Element => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <NavigationTabs>
          <Routing />
        </NavigationTabs>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
);
