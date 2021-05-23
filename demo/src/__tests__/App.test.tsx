import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { App } from "../App";
import { EXAMPLE_SIZE } from "../util/constants";
import { isEditorPage, isExamplesPage } from "./Routing.test";
import { inputValue } from "./test-utils";

describe("App Navigation", () => {
  it("Can navigate to the Examples Page", async () => {
    render(<App />);
    // click on navigation tab link
    fireEvent.click(screen.getByText("Examples"));

    expect.assertions(1);
    await isExamplesPage();
  });

  it("Can navigate to the Editor Page", async () => {
    render(<App />);
    // click on navigation tab link
    fireEvent.click(screen.getByText("Editor"));

    expect.assertions(1);
    await isEditorPage();
  });

  it("Can open an example tile in the editor", async () => {
    // need to start off on the examples page
    render(<App />);
    fireEvent.click(screen.getByText("Examples"));

    const tile = await screen.findByTitle("Rhombus width: 10");
    fireEvent.click(tile);

    expect.assertions(5);
    await isEditorPage();

    const [shapeInput, ...rest] = await screen.findAllByLabelText("Shape");
    // has only 1 layer
    expect(rest).toHaveLength(0);
    // rhombus is selected
    expect(inputValue(shapeInput)).toBe("rhombus");

    const [backgroundWidth, elementWidth] = await screen.findAllByLabelText(
      "Width"
    );
    // background is 300
    expect(inputValue(backgroundWidth)).toBe(EXAMPLE_SIZE.toString());
    // width is 10
    expect(inputValue(elementWidth)).toBe("10");
  });
});
