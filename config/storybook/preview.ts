import type { Preview } from "@storybook/react-webpack5";
import "../../src/app/styles/index.scss";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { routerDecorator } from "shared/config/storybook/routerDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
        routerDecorator(),
        themeDecorator(Theme.LIGHT),
  ],
};

export default preview;
