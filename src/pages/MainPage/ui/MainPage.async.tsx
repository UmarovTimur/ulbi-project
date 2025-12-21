import { lazy } from 'react';


export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-expect-error it's a study project, remove after all
    setTimeout(() => resolve(import('./MainPage')), 1500);
}))