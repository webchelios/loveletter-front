import { createBrowserRouter } from "react-router";
import { MoviesPage } from "../movies/presentation/MoviesPage";
import { HomePage } from "../shared/presentation/HomePage";
import { NotFoundPage } from "../shared/presentation/NotFoundPage";
import { MainLayout } from "../shared/layouts/MainLayout";
import { LoginPage } from "../auth/presentation/LoginPage";
import { RegisterPage } from "../auth/presentation/RegisterPage";
import { DirectorsPage } from "../directors/presentation/DirectorsPage";
import { UsersPage } from "../auth/presentation/UsersPage";

import { UserAdminPage } from "../admin/users/presentation/UserAdminPage";
import { EditUserPage } from "../admin/users/presentation/EditUserPage";
import { MovieAdminPage } from "../admin/movies/presentation/MovieAdminPage";
import { CreateDirectorPage } from "../directors/presentation/CreateDirectorPage";
import { CreateMoviePage } from "../movies/presentation/CreateMoviePage";
import { AdminPage } from "../admin/shared/presentation/AdminPage";
import { DirectorAdminPage } from "../admin/directors/presentation/DirectorAdminPage";


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
                path: 'crear-director',
                element: <CreateDirectorPage />
            },
            {
                path: 'crear-pelicula',
                element: <CreateMoviePage />
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
                path: 'administracion/usuarios/editar/:id',
                element: <EditUserPage />
            },
            {
                path: 'administracion/peliculas',
                element: <MovieAdminPage />
            },
            {
                path: 'administracion/directores',
                element: <DirectorAdminPage />
            },
            {
                path: '*',
                element: <NotFoundPage />
            }
        ],
    },
])