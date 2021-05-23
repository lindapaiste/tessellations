import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "./test-utils";
import { PATHS } from "../util/constants";
import { Routing } from "../navigation/Routing";

/**
 * Test the Routing component by using a MemoryRouter
 * which allows manually setting initialEntries.
 */

export const isEditorPage = async () => {
  const button = await screen.findAllByText(/Add Layer/i);
  expect(button).toBeTruthy();
};

export const isExamplesPage = async () => {
  const title = await screen.findByText("Same Pattern, Different Layout");
  expect(title).toBeTruthy();
};

describe("App Routing", () => {
  it("Can load editor page", async () => {
    render(
      <MemoryRouter initialEntries={[PATHS.EDITOR]}>
        <Routing />
      </MemoryRouter>
    );

    expect.assertions(1);
    await isEditorPage();
  });

  it("Can load examples page", async () => {
    render(
      <MemoryRouter initialEntries={[PATHS.EXAMPLES]}>
        <Routing />
      </MemoryRouter>
    );

    expect.assertions(1);
    await isExamplesPage();
  });
});
