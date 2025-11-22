import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Card from "./Card";

const meta = {
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

// this is from a line in my personal story hehe
export const Default: Story = {
  args: {
    children: (
      <div>
        <h3>City Night</h3>
        <p>
          The city never slept. Even through the thick cracks of the apartment
          window, you could hear its restless hum, distant car horns, muffled
          laughter from the street below, the whir of neon signs flickering on
          even before the sun had set. It was background music to their shared
          life, a soundscape you had grown used to, even comforted by.
        </p>
      </div>
    ),
    color: "pink",
  },
};

export const Disabled: Story = {
  args: {
    children: (
      <div>
        <h3>City Night</h3>
        <p>
          The city never slept. Even through the thick cracks of the apartment
          window, you could hear its restless hum, distant car horns, muffled
          laughter from the street below, the whir of neon signs flickering on
          even before the sun had set. It was background music to their shared
          life, a soundscape you had grown used to, even comforted by.
        </p>
      </div>
    ),
    color: "pink",
    disabled: true,
  },
};
