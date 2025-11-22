import type { Meta, StoryObj } from "@storybook/react-webpack5";
import TableHeader from "./TableHeader";

const meta = {
  component: TableHeader,
} satisfies Meta<typeof TableHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <tr>
        <th>Name</th>
        <th>Colour</th>
        <th>Year</th>
      </tr>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <tr>
        <th>Name</th>
        <th>Colour</th>
        <th>Year</th>
      </tr>
    ),
  },
};
