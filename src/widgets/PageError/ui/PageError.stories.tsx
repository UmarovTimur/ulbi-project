import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { PageError } from "./PageError";

const meta = {
  title: "widgets/PageError",
  component: PageError,
  // tags: ["autodocs"],
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PageErrorLight: Story = {};

export const PageErrorDark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
};