import { Decorator } from "@storybook/react-webpack5";
import { BrowserRouter } from "react-router-dom";

// eslint-disable-next-line react/display-name
export const routerDecorator = (): Decorator => (Story) => {
    return <BrowserRouter>
        <Story/>
    </BrowserRouter>
}