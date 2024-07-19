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
        slate: "slate",
        "slate-dark": "slate-dark",
        stone: "stone",
        "stone-dark": "stone-dark",
        red: "red",
        "red-dark": "red-dark",
        rose: "rose",
        "rose-dark": "rose-dark",
        orange: "orange",
        "orange-dark": "orange-dark",
        green: "green",
        "green-dark": "green-dark",
        yellow: "yellow",
        "yellow-dark": "yellow-dark",
        blue: "blue",
        "blue-dark": "blue-dark",
        violet: "violet",
        "violet-dark": "violet-dark",
      },
      defaultTheme: "slate",
    }),
  ],
};

export default preview;
