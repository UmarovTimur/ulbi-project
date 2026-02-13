import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { Button, ButtonSize, ButtonVariants } from "./Button";
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
    variant: ButtonVariants.CLEAR,
    children: "Clear",
  },
};

export const ClearDark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
  args: {
    variant: ButtonVariants.CLEAR,
    children: "Clear dark",
  },
};

export const Outlined: Story = {
  args: {
    variant: ButtonVariants.OUTLINED,
    children: "Outlined",
  },
};

export const OutlinedDark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
  args: {
    variant: ButtonVariants.OUTLINED,
    children: "Dark",
  },
};

export const Primary: Story = {
  args: {
    variant: ButtonVariants.PRIMARY,
    children: "Primary",
  },
};

export const PrimaryDark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
  args: {
    variant: ButtonVariants.PRIMARY,
    children: "Dark",
  },
};

export const Ghost: Story = {
  args: {
    variant: ButtonVariants.GHOST,
    children: "Ghost",
  },
};

export const GhostDark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
  args: {
    variant: ButtonVariants.GHOST,
    children: "Ghost",
  },
};

export const Icon: Story = {
  args: {
    size: ButtonSize.ICON,
    variant: ButtonVariants.PRIMARY,
    children: "ICO",
  },
};

export const IconDark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
  args: {
    size: ButtonSize.ICON,
    variant: ButtonVariants.PRIMARY,
    children: "ICO",
  },
};
