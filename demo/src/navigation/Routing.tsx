import { Route, Switch } from "react-router-dom";
import React from "react";
import { sortBy } from "lodash";
import { PAGES } from "./pages";

/**
 * Traffic goes to the first matching route, so <Route> components should have the shortest names last
 * to ensure that the subpages come before their parents.
 */
const routes = sortBy(PAGES, (p) => p.path.length).reverse();

export const Routing = (): JSX.Element => (
  <Switch>
    {routes.map((props) => (
      <Route key={props.path} {...props} />
    ))}
  </Switch>
);
