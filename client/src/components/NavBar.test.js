import React from "react";
import { render } from "@testing-library/react";
import NavBar from "./NavBar";

test("concise test - renders Players from navbar", () => {
    const { getByText } = render(<NavBar />);
    getByText(/Player's/i);
});
