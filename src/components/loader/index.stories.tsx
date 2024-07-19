import { Meta, StoryObj } from "@storybook/react";
import { Loader } from ".";

const meta: Meta<typeof Loader> = {
  title: "Components/Loader",
  component: Loader,
  args: {
    size: "default",
  },
  argTypes: {
    size: {
      type: {
        name: "enum",
        value: ["default", "sm", "lg", "xl"],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
