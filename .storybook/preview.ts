import "@/styles/globals.css";
import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    withThemeByClassName({
      themes: {
        Slate: "slate",
        "Slate Dark": "slate-dark",
        Stone: "stone",
        "Stone Dark": "stone-dark",
        Red: "red",
        "Red Dark": "red-dark",
        Rose: "rose",
        "Rose Dark": "rose-dark",
        Orange: "orange",
        "Orange Dark": "orange-dark",
        Green: "green",
        "Green Dark": "green-dark",
        Yellow: "yellow",
        "Yellow Dark": "yellow-dark",
        Blue: "blue",
        "Blue Dark": "blue-dark",
        Violet: "violet",
        "Violet Dark": "violet-dark",
      },
      defaultTheme: "Slate",
    }),
  ],
};

export default preview;
