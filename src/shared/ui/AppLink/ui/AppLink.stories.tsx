import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { AppLink, AppLinkTheme } from "./AppLink";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  tags: ["autodocs"],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AppLinkLight: Story = {
  args: {
    to: "/",
    children: "AppLink",
  },
};

export const AppLinkDark: Story = {
  args: {
    to: "/",
    children: "AppLink",
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const AppLinkPrimary: Story = {
  args: {
    to: "/",
    children: "AppLink",
    theme: AppLinkTheme.PRIMARY
  },
};

export const AppLinkPrimaryDark: Story = {
  args: {
    to: "/",
    children: "AppLink",
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const AppLinkSecondary: Story = {
  args: {
    to: "/",
    children: "AppLink",
    theme: AppLinkTheme.SECONDARY,
  },
};

export const AppLinkSecondaryDark: Story = {
  args: {
    to: "/",
    children: "AppLink",
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [themeDecorator(Theme.DARK)],
};
