import { render, screen } from "@testing-library/react";
import ResultsTable from "../src/components/ResultsTable";
import React from "react";

beforeEach(() => {
    render(<ResultsTable />);
});
test("when passed multiple mod ids in an obj, show the correct data", async() => {
    const blockName = await screen.findByTestId("blockName")
    const image = await screen.findByTestId("image")
    const modIdFirstChild = (await screen.findByTestId("modIdDiv")).children[0]

    expect(blockName).not.toBeNull()
    expect(image).not.toBeNull()
    expect(modIdFirstChild).not.toBeNull()
    
    expect(blockName).toHaveValue("test")
    expect(image).toHaveValue("test")
    expect(image).toHaveValue("1234")
});
test("the correct text is shown to the user when a block is loaded", () => {});
test("when the user clicks on an option on the card it updates the store", () => {});
