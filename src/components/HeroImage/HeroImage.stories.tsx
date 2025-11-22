import type { Meta, StoryObj } from "@storybook/react-webpack5";
import HeroImage from "./HeroImage";

const meta = {
  component: HeroImage,
} satisfies Meta<typeof HeroImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "/mofusand.jpg",
    text: "mofusand",
    height: "600px",
  },
};
export const Disabled: Story = {
  args: {
    src: "/mofusand.jpg",
    text: "mofusand",
    disabled: true,
    height: "600px",
  },
};
