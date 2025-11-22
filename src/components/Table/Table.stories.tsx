import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Table from "./Table";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import TableFooter from "./TableFooter";

const meta = {
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <TableHeader>
          <tr>
            <th>Name</th>
            <th>Color</th>
            <th>Year</th>
          </tr>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>Adrianna</TableCell>
            <TableCell>Yellow</TableCell>
            <TableCell>2005</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Andrea</TableCell>
            <TableCell>Orange</TableCell>
            <TableCell>2000</TableCell>
          </TableRow>
        </tbody>
        <TableFooter>
          <tr>
            <td colSpan={3}>Total: 2 members</td>
          </tr>
        </TableFooter>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <TableHeader>
          <tr>
            <th>Name</th>
            <th>Color</th>
            <th>Year</th>
          </tr>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>Adrianna</TableCell>
            <TableCell>Yellow</TableCell>
            <TableCell>2005</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Andrea</TableCell>
            <TableCell>Orange</TableCell>
            <TableCell>2000</TableCell>
          </TableRow>
        </tbody>
        <TableFooter>
          <tr>
            <td colSpan={3}>Total: 2 members</td>
          </tr>
        </TableFooter>
      </>
    ),
  },
};
