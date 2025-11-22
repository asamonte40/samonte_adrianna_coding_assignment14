import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Label from "./Label";

const meta = {
  component: Label,
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Label",
  },
};

export const Disabled: Story = {
  args: {
    text: "Label",
    disabled: true,
  },
};
