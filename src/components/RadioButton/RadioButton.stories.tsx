import type { Meta, StoryObj } from "@storybook/react-webpack5";
import RadioButton from "./RadioButton";

const meta = {
  component: RadioButton,
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "payment",
    label: "Choose your payment:",
    options: ["Visa", "PayPal", "Mastercard"],
  },
};

export const Disabled: Story = {
  args: {
    name: "payment",
    label: "Choose your payment:",
    options: ["Visa", "PayPal", "Mastercard"],
    disabled: true,
  },
};
