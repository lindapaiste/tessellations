import React, { ComponentType, ReactNode } from "react";
import { PATHS } from "../util/constants";

/**
 * Schema for app pages to be used in both routing and links.
 * Allows for changes to be made from one place only.
 * Order of the array should be the order of navigation links.
 * Order of routes will be determined by path.
 */
export interface Page {
  path: string;
  component: ComponentType;
  title: ReactNode;
}

export const PAGES: Page[] = [
  {
    path: PATHS.EDITOR,
    component: React.lazy(() => import("../editor/EditorPage")),
    title: "Editor",
  },
  {
    path: PATHS.EXAMPLES,
    component: React.lazy(() => import("../examples/Examples")),
    title: "Examples",
  },
];
