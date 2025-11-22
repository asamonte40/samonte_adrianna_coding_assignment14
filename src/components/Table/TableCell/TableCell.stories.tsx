import type { Meta, StoryObj } from "@storybook/react-webpack5";
import TableCell from "./TableCell";

const meta = {
  component: TableCell,
} satisfies Meta<typeof TableCell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Adrianna",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Adrianna",
  },
};
