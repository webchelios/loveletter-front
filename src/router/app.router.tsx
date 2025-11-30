import { createBrowserRouter } from "react-router";
import { MoviesPage } from "../presentation/MoviesPage";
import { HomePage } from "../presentation/HomePage";
import { NotFoundPage } from "../presentation/NotFoundPage";
import { DirectorsPage } from "../presentation/DirectorsPage";
import { UsersPage } from "../presentation/UsersPage";
import { MainLayout } from "../shared/layouts/MainLayout";

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'peliculas',
                element: <MoviesPage />,
            },
            {
                path: 'directores',
                element: <DirectorsPage />,
            },
            {
                path: 'cuenta',
                element: <UsersPage />
            },
            {
                path: '*',
                element: <NotFoundPage />
            }
        ],
    },
])