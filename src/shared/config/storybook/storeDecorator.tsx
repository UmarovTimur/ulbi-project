import { Decorator, StoryFn } from "@storybook/react-webpack5";
import { StoreProvider } from "app/providers/Store";

// eslint-disable-next-line react/display-name
export const storeDecorator = (): Decorator => (Story: StoryFn) => {
  return <StoreProvider>
    <Story />
  </StoreProvider>
}