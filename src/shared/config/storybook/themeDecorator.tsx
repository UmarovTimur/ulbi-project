import { Decorator } from "@storybook/react-webpack5";
import { Theme } from "app/providers/ThemeProvider";

// eslint-disable-next-line react/display-name
export const themeDecorator = (theme: Theme): Decorator => (Story) => {
    return <div
        className={`app ${theme}`} 
        style={{
            minHeight: "auto",
            padding: (theme === Theme.DARK ? '3em' : "auto"),
            display: 'flex',
            width: '100%',
        }}>
        <Story/>
    </div>
}