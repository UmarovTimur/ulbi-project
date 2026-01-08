import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { Button, ThemeButton } from "./Button";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: "Outlined",
    },
};

export const Outlined: Story = {
    args: {
        theme: ThemeButton.OUTLINED,
        children: "Outlined",
    },
};

export const Primary: Story = {
    args: {
        theme: ThemeButton.PRIMARY,
        children: "Primary",
    },
};

export const PrimaryDark: Story = {
    decorators: [themeDecorator(Theme.DARK)],
    args: {
        theme: ThemeButton.PRIMARY,
        children: "Dark",
    },
};
