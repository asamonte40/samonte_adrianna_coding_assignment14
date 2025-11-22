import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Dropdown from "./Dropdown";

const meta = {
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Choose a colour:",
    options: ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"],
  },
};

export const Disabled: Story = {
  args: {
    label: "Choose a colour:",
    options: ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"],
    disabled: true,
  },
};
