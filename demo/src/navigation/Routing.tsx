import { Route, Switch } from "react-router-dom";
import React, { Suspense } from "react";
import { LinearProgress } from "@material-ui/core";
import { sortBy } from "lodash";
import { PAGES } from "./pages";

/**
 * Traffic goes to the first matching route, so <Route> components should have the shortest names last
 * to ensure that the subpages come before their parents.
 */
const routes = sortBy(PAGES, (p) => p.path.length).reverse();

export const Routing = (): JSX.Element => (
  <Suspense fallback={<LinearProgress color="primary" />}>
    <Switch>
      {routes.map((props) => (
        <Route key={props.path} {...props} />
      ))}
    </Switch>
  </Suspense>
);
