/* eslint-disable react/display-name */
import { Decorator } from "@storybook/react";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";

export const themeDecorator =
  (theme: Theme): Decorator =>
    (Story) => (
      <div className="wrapper">
        <ThemeProvider >
          <div
            className={`app ${theme}`}
            style={{
              padding: theme === Theme.DARK ? "3em" : "0",
            }}
          >
            <Story />
          </div>
        </ThemeProvider>
      </div>
    );
