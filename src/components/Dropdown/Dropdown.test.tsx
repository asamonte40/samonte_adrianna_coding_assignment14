import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dropdown from "./Dropdown";

test("renders all dropdown options", () => {
  render(<Dropdown options={["One", "Two"]} />);
  expect(screen.getByText("One")).toBeVisible();
  expect(screen.getByText("Two")).toBeVisible();
});

test("dropdown is disabled when prop set", () => {
  render(<Dropdown options={["One"]} disabled />);
  const select = screen.getByRole("combobox");
  expect(select).toBeDisabled();
});
