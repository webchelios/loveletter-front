import { createBrowserRouter } from "react-router";
import { MoviesPage } from "../movies/presentation/MoviesPage";
import { HomePage } from "../auth/presentation/HomePage";
import { NotFoundPage } from "../shared/presentation/NotFoundPage";

import { MainLayout } from "../shared/layouts/MainLayout";
import { LoginPage } from "../auth/presentation/LoginPage";
import { RegisterPage } from "../auth/presentation/RegisterPage";
import { DirectorsPage } from "../directors/presentation/DirectorsPage";
import { UsersPage } from "../auth/presentation/UsersPage";

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
                path: 'usuario',
                element: <UsersPage />
            },
            {
                path: '*',
                element: <NotFoundPage />
            }
        ],
    },
])