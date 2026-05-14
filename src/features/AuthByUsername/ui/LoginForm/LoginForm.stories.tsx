import { Meta, StoryObj } from "@storybook/react-webpack5";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import LoginForm from "./LoginForm";

const meta = {
  title: "features/LoginForm",
  component: LoginForm,
  // tags: ["autodocs"],
} satisfies Meta<typeof LoginForm>

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginFormLight: Story = {
  args: {
  }
}

export const LoginFormDark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
  args: {
  }
}