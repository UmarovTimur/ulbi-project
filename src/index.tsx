import App from "app/App";
import ThemeProvider from "app/providers/ThemeProvider/ui/ThemeProvider";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "shared/config/i18n/i18n";

render(
    <BrowserRouter future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
    }} >
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById("root")
);
