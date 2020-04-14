import React from "react";
import { render, waitForElement } from "@testing-library/react";
import Players from "./Players";

test("api did mount", async () => {
    const container = render(<Players />);

    await waitForElement(() => container.getAllByText(/Country/i));
});

test("did data date range render", () => {
    const { getByText } = render(<Players />);
    getByText(/June/i);
});
