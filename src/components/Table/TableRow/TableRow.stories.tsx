import type { Meta, StoryObj } from "@storybook/react-webpack5";
import TableRow from "./TableRow";

const meta = {
  component: TableRow,
} satisfies Meta<typeof TableRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <tr>
        <td>Andrea</td>
        <td>Orange</td>
        <td>2000</td>
      </tr>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <tr>
        <td>Andrea</td>
        <td>Orange</td>
        <td>2000</td>
      </tr>
    ),
  },
};
