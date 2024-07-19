import { Meta, StoryObj } from "@storybook/react";
import { Icon, IconNameArray } from ".";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  args: {
    size: 16,
    color: "black",
    name: "alarm-clock",
    variant: "none",
  },
  argTypes: {
    size: {
      type: "number",
    },
    color: {
      type: "string",
    },
    name: {
      type: {
        name: "enum",
        value: IconNameArray,
      },
    },
    variant: {
      type: {
        name: "enum",
        value: ["primary", "secondary", "destructive", "muted", "none"],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
