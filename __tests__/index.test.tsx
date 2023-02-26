import { render, screen } from "@testing-library/react";

import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
    it("renders hello world", () => {
        render(<Home />);

        const text = screen.getByText('Hello, World!');
        expect(text).toBeInTheDocument();
    });
});
