// Test away!
import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

import Controls from "./Controls";

describe("<Controls/>", () => {
  it("should disable buttons for open gate", () => {
    const { getByText } = render(<Controls closed={false} locked={false} />);

    const gateButton = getByText(/close gate/i);
    const lockButton = getByText(/lock gate/i);

    expect(lockButton.disabled).toBe(true);
    expect(gateButton.disabled).toBe(false);
  });

  it("should disable buttons for locked gate", () => {
    const { getByText } = render(<Controls closed={true} locked={true} />);

    const gateButton = getByText(/open gate/i);
    const lockButton = getByText(/unlock gate/i);

    expect(lockButton.disabled).toBe(false);
    expect(gateButton.disabled).toBe(true);
  });

  it("should enable buttons on closed gate", () => {
    const { getByText } = render(<Controls closed={true} locked={false} />);

    const gateButton = getByText(/open gate/i);
    const lockButton = getByText(/lock gate/i);

    expect(lockButton.disabled).toBe(true);
    expect(gateButton.disabled).toBe(true);
  });
});
