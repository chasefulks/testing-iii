// Test away
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

describe("<Dashboard/>", () => {
  it("should close gate", () => {
    const { getByText } = render(<Dashboard />);

    const button = getByText(/close gate/i);

    fireEvent.click(button);

    expect(button).toHaveTextContent(/open gate/i);
  });
  it("should lock gate", () => {
    const { getByText } = render(<Dashboard />);

    const gateButton = getByText(/close gate/i);
    const button = getByText(/lock gate/i);
    fireEvent.click(gateButton);
    fireEvent.click(button);

    expect(button).toHaveTextContent(/unlock gate/i);
  });
});
