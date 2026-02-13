import { Decorator, StoryFn } from "@storybook/react-webpack5";
import { CSSProperties } from "react";

export const customStylesDecorator =
  (styles: CSSProperties): Decorator => {

    const storyComponent = (Story: StoryFn) => {
      return (
        <div
          style={{
            minHeight: "auto",
            display: "flex",
            width: "100%",
            ...styles,
          }}
        >
          <Story />
        </div>
      );
    }

    return storyComponent;
  };
