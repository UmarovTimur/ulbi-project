import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Sidebar } from "./Sidebar";
import { customStylesDecorator } from "shared/config/storybook/customStylesDecorator";

const meta = {
  title: "widgets/Sidebar",
  component: Sidebar,
  decorators: [customStylesDecorator({display: "flex", height: "100%"})]
  // tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SidebarLight: Story = {
};

export const SidebarDark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
};

