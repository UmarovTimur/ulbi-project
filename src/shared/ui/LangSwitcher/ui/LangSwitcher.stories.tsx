
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { LangSwitcher } from "./LangSwitcher";

const meta = {
  title: "shared/LangSwitcher",
  component: LangSwitcher,
  // tags: ["autodocs"],
} satisfies Meta<typeof LangSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LangSwitcherLight: Story = {};

export const LangSwitcherDark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
};