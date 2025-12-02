import { createBrowserRouter } from "react-router";
import { MoviesPage } from "../movies/presentation/MoviesPage";
import { HomePage } from "../shared/presentation/HomePage";
import { NotFoundPage } from "../shared/presentation/NotFoundPage";
import { MainLayout } from "../shared/layouts/MainLayout";
import { LoginPage } from "../auth/presentation/LoginPage";
import { RegisterPage } from "../auth/presentation/RegisterPage";
import { DirectorsPage } from "../directors/presentation/DirectorsPage";
import { UsersPage } from "../auth/presentation/UsersPage";
import { AdminPage } from "../admin/presentation/AdminPage";
import { UserAdminPage } from "../admin/presentation/UserAdminPage";

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
                path: 'administracion',
                element: <AdminPage />
            },
            {
                path: 'administracion/usuarios',
                element: <UserAdminPage />
            },
            {
                path: '*',
                element: <NotFoundPage />
            }
        ],
    },
])