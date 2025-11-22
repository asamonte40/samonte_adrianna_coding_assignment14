import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RadioButton from "./RadioButton";

const options = ["Option 1", "Option 2", "Option 3"];

test("renders radio button options", () => {
  render(<RadioButton name="group" options={options} />);

  // just check all option for visibility
  expect(screen.getByText("Option 1")).toBeVisible();
  expect(screen.getByText("Option 2")).toBeVisible();
  expect(screen.getByText("Option 3")).toBeVisible();
});

test("radio buttons respect disabled prop", () => {
  render(<RadioButton name="group" options={options} disabled />);

  // get all radios and check disabled
  screen.getAllByRole("radio").forEach((radio) => {
    expect(radio).toBeDisabled();
  });
});
