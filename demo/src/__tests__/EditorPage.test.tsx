import { fireEvent, screen } from "@testing-library/react";
import React from "react";
import { EditorPage } from "../editor/EditorPage";
import { inputElement, render } from "./test-utils";

describe("Editor page", () => {
  it("Starts out with one layer", async () => {
    render(<EditorPage />);
    expect.assertions(1);
    const remove = await screen.getAllByText(/Remove Layer/i);
    expect(remove).toHaveLength(1);
  });

  it("Can add and remove layers", async () => {
    render(<EditorPage />);
    const add = await screen.getByText(/Add Layer/i);
    fireEvent.click(add);
    const remove = await screen.getAllByText(/Remove Layer/i);
    expect(remove).toHaveLength(2);
    const [removeFirst, removeSecond] = remove;
    fireEvent.click(removeFirst);
    expect(await screen.getAllByText(/Remove Layer/i)).toHaveLength(1);
    expect(removeSecond).toBeInTheDocument();
  });

  it("Can update the SVG through inputs", async () => {
    // Note: not using beforeEach because I need to access the container here.
    const { container } = render(<EditorPage />);
    const fill = await screen.getByLabelText(/Fill Color/i);
    const picker = inputElement(fill);
    fireEvent.change(picker, { target: { value: "#4e8c31" } });
    // TODO: better selector - skips over the rect to the first shape
    const shape = container.querySelector("svg > :nth-child(2)");
    expect(shape?.getAttribute("fill")?.toLowerCase()).toBe("#4e8c31");
  });
});
