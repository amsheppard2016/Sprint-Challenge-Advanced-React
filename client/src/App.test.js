import React from "react";
import ReactDOM from "react-dom";
import { render, waitForElement } from "@testing-library/react";
import App from "./App";

it("renders without crashing", async () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

test("all components render", async () => {
    const container = render(<App />);
    await waitForElement(() => container.getByText(/Player's/i));
    await waitForElement(() => container.getAllByText(/Country/i));
});
