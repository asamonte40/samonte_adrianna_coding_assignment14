import type { Meta, StoryObj } from "@storybook/react-webpack5";

import Img from "./Img";

const meta = {
  component: Img,
} satisfies Meta<typeof Img>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "/yippeee.jpg",
    alt: "bear",
  },
};

export const Disabled: Story = {
  args: {
    src: "/yippeee.jpg",
    alt: "bear",
    disabled: true,
  },
};
