import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import  NotFoundPage  from "./NotFoundPage";

const meta = {
    title: "pages/NotFoundPage",
    component: NotFoundPage,
    // tags: ["autodocs"],
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotFoundPageLight: Story = {};

export const NotFoundPageDark: Story = {
    decorators: [themeDecorator(Theme.DARK)],
};