import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import MainPage from "./MainPage";
import { storeDecorator } from "shared/config/storybook/storeDecorator";

const meta = {
  title: "pages/MainPage",
  component: MainPage,
  decorators: [storeDecorator()],
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainPageLight: Story = {};

export const MainPageDark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
};