import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TableRow from "./TableRow";

test("renders TableRow and is visible", () => {
  render(
    <table>
      <tbody>
        <TableRow>
          <td>Visible Row</td>
        </TableRow>
      </tbody>
    </table>,
  );
  expect(screen.getByText("Visible Row")).toBeVisible();
});

test("applies disabled background color when disabled", () => {
  render(
    <table>
      <tbody>
        <TableRow disabled>
          <td>Disabled Row</td>
        </TableRow>
      </tbody>
    </table>,
  );
  const row = screen.getByRole("row");
  expect(row).toHaveStyle("background-color: #f0f0f0");
});
