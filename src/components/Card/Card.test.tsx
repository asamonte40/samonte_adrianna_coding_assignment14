import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./Card";

test("renders card and checks visibility", () => {
  render(<Card>Test Card</Card>);
  expect(screen.getByText("Test Card")).toBeVisible();
});

test("card changes style when disabled", () => {
  render(<Card disabled>Disabled Card</Card>);
  const cardElement = screen.getByText("Disabled Card");
  expect(cardElement).toHaveStyle("opacity: 0.5");
  expect(cardElement).toHaveStyle("cursor: not-allowed");
});
