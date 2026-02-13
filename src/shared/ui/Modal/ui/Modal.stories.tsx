import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Modal } from "./Modal";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Modal", 
  component: Modal,
   
} satisfies Meta<typeof Modal>

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalLight: Story = {
  args: {
    isOpen: true,
  }
}

export const ModalDark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
  args: {
    isOpen: true,
  }
}   