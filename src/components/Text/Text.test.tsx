import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Text from "./Text";

test("renders text normally", () => {
  render(<Text>Sample Text</Text>);
  expect(screen.getByText("Sample Text")).toBeVisible();
});

test("text shows disabled style", () => {
  render(<Text disabled>Sample Text</Text>);
  const text = screen.getByText("Sample Text");
  expect(text).toHaveStyle("color: #aaa");
  expect(text).toHaveStyle("cursor: not-allowed");
});
