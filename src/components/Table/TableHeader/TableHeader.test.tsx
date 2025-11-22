import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TableHeader from "./TableHeader";

test("renders TableHeader and is visible", () => {
  render(
    <table>
      <TableHeader>
        <tr>
          <th>Visible Header</th>
        </tr>
      </TableHeader>
    </table>,
  );
  expect(screen.getByText("Visible Header")).toBeVisible();
});

test("applies disabled background color when disabled", () => {
  render(
    <table>
      <TableHeader disabled>
        <tr>
          <th>Disabled Header</th>
        </tr>
      </TableHeader>
    </table>,
  );
  const header = screen.getByRole("rowgroup");
  expect(header).toHaveStyle("background-color: #f2f2f2");
});
