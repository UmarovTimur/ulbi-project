import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";
import { LangSwitcher } from "shared/ui/LangSwitcher";



const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <main className="content-page">
          <Sidebar />
          <LangSwitcher />
          <AppRouter />
        </main>
      </Suspense>
    </div>
  );
};

export default App;
