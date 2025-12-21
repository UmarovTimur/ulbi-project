import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { Container } from "shared/ui/Container";

export const AppRouter = () => {
    return (
        <div className="content-wrapper">
            <Suspense fallback={<Container>Loading...</Container>}>
                <Routes>
                    {Object.values(routeConfig).map(({ element, path }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            </Suspense>
        </div>
    );
};
