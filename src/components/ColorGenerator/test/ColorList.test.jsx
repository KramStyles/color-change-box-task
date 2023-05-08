import { render, screen } from "@testing-library/react";
import React from "react";
import ColorList from "../ColorList";
import { colorArray } from "../data";

test("shows a list of color items", () => {
  render(<ColorList />);
  const colorItems = screen.getAllByTestId("grid-column");

  // This shows the total number of displayed elements are equal to the number of colors we have
  expect(colorItems).toHaveLength(colorArray.length)

    // check that each color item has a unique ID and background color using a loop
    colorItems.forEach((item, index) => {
        expect(item).toHaveAttribute('class', `grid-column col-${index + 1}`)
        expect(item).toHaveTextContent(index + 1)
    })
});
