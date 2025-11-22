import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Img from "./Img";

test("renders image", () => {
  render(<Img src="test.jpg" alt="Test" />);
  expect(screen.getByAltText("Test")).toBeVisible();
});

test("image disabled style works", () => {
  render(<Img src="test.jpg" alt="Test" disabled />);
  const img = screen.getByAltText("Test");
  expect(img).toHaveStyle("opacity: 0.5");
});
