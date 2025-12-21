import { lazy } from "react";

export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // @ts-expect-error it's a study project, remove after all
    setTimeout(() => resolve(import('./AboutPage')), 1500)
}));
