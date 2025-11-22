import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TableFooter from "./TableFooter";

test("renders TableFooter and is visible", () => {
  render(
    <table>
      <TableFooter>
        <tr>
          <td>Visible Footer</td>
        </tr>
      </TableFooter>
    </table>,
  );
  expect(screen.getByText("Visible Footer")).toBeVisible();
});

test("applies disabled background color when disabled", () => {
  render(
    <table>
      <TableFooter disabled>
        <tr>
          <td>Disabled Footer</td>
        </tr>
      </TableFooter>
    </table>,
  );
  const footer = screen.getByRole("rowgroup");
  expect(footer).toHaveStyle("background-color: #eaeaea");
});
