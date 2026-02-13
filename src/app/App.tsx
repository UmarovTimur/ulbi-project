import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <div className="app-wrapper">
        <Suspense fallback="">
          <Sidebar />
          <main className="content-page">
            <Navbar />
            <AppRouter />
          </main>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
