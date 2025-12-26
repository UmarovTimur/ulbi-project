import App from "app/App";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import ThemeProvider from "app/providers/ThemeProvider/ui/ThemeProvider";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "shared/config/i18n/i18n";

render(
    <BrowserRouter future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
    }} >
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById("root")
);
