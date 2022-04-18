import { render, screen } from "@testing-library/react";
import Heading from "./Heading.js";

//Question 4
test("Workflow 2 is in the heading component", () => {
    render(<Heading />);
    const headingElement = screen.getByText("Workflow 2");
    expect(headingElement).toBeInTheDocument();
});