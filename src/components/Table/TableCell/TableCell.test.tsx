import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TableCell from "./TableCell";

test("renders TableCell and is visible", () => {
  render(
    <table>
      <tbody>
        <tr>
          <TableCell>Visible Cell</TableCell>
        </tr>
      </tbody>
    </table>,
  );
  expect(screen.getByText("Visible Cell")).toBeVisible();
});

test("applies disabled background color when disabled", () => {
  render(
    <table>
      <tbody>
        <tr>
          <TableCell disabled>Disabled Cell</TableCell>
        </tr>
      </tbody>
    </table>,
  );
  const cell = screen.getByRole("cell");
  expect(cell).toHaveStyle("background-color: #f2f2f2");
});
