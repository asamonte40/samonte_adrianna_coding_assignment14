import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom";

test("renders button and checks visibility", () => {
  render(<Button label="Test Button" />);
  const buttonElement = screen.getByText("Test Button");
  expect(buttonElement).toBeVisible();
});

test("button changes background when disabled", () => {
  render(<Button label="Disabled" disabled color="#cccccc" />);
  const buttonElement = screen.getByText("Disabled");
  expect(buttonElement).toHaveStyle("opacity: 0.5");
  expect(buttonElement).toHaveStyle("cursor: not-allowed");
});
