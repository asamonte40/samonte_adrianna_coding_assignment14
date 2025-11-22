import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Label from "./Label";

test("label shows disabled style", () => {
  render(<Label text="Username" disabled />);
  const label = screen.getByText("Username");
  expect(label).toHaveStyle("color: #aaa");
  expect(label).toHaveStyle("cursor: not-allowed");
});
