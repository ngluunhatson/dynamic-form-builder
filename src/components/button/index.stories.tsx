import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    variant: "primary",
    size: "md",
    children: "Button",
    radius: "md",
    disabled: false,
    asChild: false,
    onClick: fn()
  },
  argTypes: {
    size: {
      type: {
        name: "enum",
        value: ["sm", "md", "lg", "xl"],
      },
    },
    variant: {
      type: {
        name: "enum",
        value: [
          "primary",
          "destructive",
          "outline",
          "secondary",
          "ghost",
          "link",
        ],
      },
    },

    radius: {
      type: {
        name: "enum",
        value: ["sm", "md", "lg", "full"],
      },
    },

    children: {
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
    },
    asChild: {
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Link: Story = {
  args: { variant: "link" },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};
