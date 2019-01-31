// Test away!
import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

import Display from "./Display";

describe("<Display/>", () => {
  it("should display closed gate", () => {
    const { getByText } = render(<Display closed={true} locked={false} />);

    getByText(/closed/i);
    getByText(/unlocked/i);
  });

  it("should display open gate", () => {
    const { getByText } = render(<Display closed={false} locked={false} />);

    getByText(/open/i);
    getByText(/unlocked/i);
  });

  it("should display color", () => {
    const { getByText } = render(<Display closed={true} locked={false} />);

    const gate = getByText(/closed/i);
    const lock = getByText(/unlocked/i);

    expect(gate.className).toBe("led red-led");
    expect(lock.className).toContain("green-led");
  });

  it("should display red color", () => {
    const { getByText } = render(<Display closed={true} locked={true} />);

    const gate = getByText(/closed/i);
    const lock = getByText("Locked");

    expect(gate.className).toContain("red-led");
    expect(lock.className).toContain("red-led");
  });
});
