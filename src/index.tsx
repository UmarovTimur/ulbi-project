import App from "app/App";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import ThemeProvider from "app/providers/ThemeProvider/ui/ThemeProvider";
import { BrowserRouter } from "react-router-dom";
import "shared/config/i18n/i18n";
import "./app/styles/index.scss";
import { StoreProvider } from "app/providers/Store";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <StoreProvider>
    <ThemeProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </ThemeProvider>
  </StoreProvider>,
);
