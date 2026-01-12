import { Decorator, StoryFn } from "@storybook/react-webpack5";
import { CSSProperties } from "react";

// eslint-disable-next-line react/display-name
export const customStylesDecorator = (styles: CSSProperties): Decorator => (Story: StoryFn) => {
    return <div
        className={`app`} 
        style={{
            minHeight: "auto",
            display: 'flex',
            width: '100%',
            ...styles
        }}>
        <Story/>
    </div>
}