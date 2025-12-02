import { createBrowserRouter } from "react-router";
import { MoviesPage } from "../presentation/MoviesPage";
import { HomePage } from "../presentation/HomePage";
import { NotFoundPage } from "../presentation/NotFoundPage";
import { DirectorsPage } from "../presentation/DirectorsPage";

import { MainLayout } from "../shared/layouts/MainLayout";
import { LoginPage } from "../presentation/LoginPage";
import { RegisterPage } from "../presentation/RegisterPage";

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
                path: 'loguearse',
                element: <LoginPage />
            },
            {
                path: 'registrarse',
                element: <RegisterPage />
            },
            {
                path: '*',
                element: <NotFoundPage />
            }
        ],
    },
])