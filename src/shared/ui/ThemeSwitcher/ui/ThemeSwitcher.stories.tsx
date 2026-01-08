import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeSwitcher } from "./ThemeSwitcher";

const meta = {
    title: "shared/ThemeSwitcher",
    component: ThemeSwitcher,
    // tags: ["autodocs"],
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThemeSwitcherLight: Story = {};

export const ThemeSwitcherDark: Story = {
    decorators: [themeDecorator(Theme.DARK)],
};