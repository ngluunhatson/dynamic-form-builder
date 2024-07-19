import { addons } from "@storybook/manager-api";

addons.setConfig({
  sidebar: {
    renderLabel: ({ name, type }) => {
      if (type === "docs") {
        return "Overview";
      }
      return name;
    },
    showRoots: false,
  },
});
