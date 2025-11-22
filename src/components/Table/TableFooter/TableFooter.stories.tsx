import type { Meta, StoryObj } from "@storybook/react-webpack5";
import TableFooter from "./TableFooter";

const meta = {
  component: TableFooter,
} satisfies Meta<typeof TableFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <tr>
        <td>Total: 2 members</td>
      </tr>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <tr>
        <td>Total: 2 members</td>
      </tr>
    ),
  },
};
