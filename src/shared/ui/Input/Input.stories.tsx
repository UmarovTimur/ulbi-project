import { Meta, StoryObj } from "@storybook/react-webpack5";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Input } from "./Input";

const meta = {
  title: "shared/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>

export default meta;
type Story = StoryObj<typeof meta>;

export const InputLight: Story = {
  args: {
    placeholder: "Test input",
  }
}

export const InputDark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
  args: {
    placeholder: "Test input",
  }
}