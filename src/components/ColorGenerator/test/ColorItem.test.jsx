import {render, screen, fireEvent} from "@testing-library/react";
import React from "react";
import ColorItem from "../ColorItem";


const renderComponent = () => {
    const color = "blue";
    const id = 1;
    // Mock function to be tested later.
    const simpleShuffle = jest.fn();

    render(<ColorItem color={color} handleClick={simpleShuffle} id={id}/>)
    return {simpleShuffle}
}

test("to show it renders correctly", () => {
    // Render the component
    renderComponent();

    // Get the element display from the rendered component and ensure it exists with the right text
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("1");
})

test("to show handleClick function is called when clicked", () => {
    // Rendering the component with a destructured mock function.
    const {simpleShuffle} = renderComponent();
    const element = screen.getByTestId("grid-column");

    // Click the event and ensure the mock function has been called.
    fireEvent.click(element)
    expect(simpleShuffle).toHaveBeenCalled();
    expect(simpleShuffle).toHaveBeenCalledTimes(1);
})
