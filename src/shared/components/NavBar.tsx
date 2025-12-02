import { Link } from 'react-router'
import './NavBar.css'
import { PrivateRoute } from '../../router/PrivateRoute'
import { useContext } from 'react';
import { AuthContext } from '../../auth/context/AuthContext';

export const NavBar = () => {
    const { logout, authUser } = useContext(AuthContext);

    return (
        <nav>
            <h1><Link to="/">Loveletter</Link></h1>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/peliculas">Peliculas</Link></li>
                <li><Link to="/directores">Directores</Link></li>

                {!authUser && (
                    <>
                        <li><Link to="/loguearse">Iniciar Sesión</Link></li>
                        <li><Link to="/registrarse">Registrarse</Link></li>
                    </>
                )}


                <PrivateRoute>
                    <li><Link to="/administracion">Panel de administración</Link></li>
                </PrivateRoute>

                {authUser && (
                    <>
                        <li><p>Hola {authUser.username}</p></li>
                        <li>
                            <button onClick={logout}>Cerrar sesión</button>
                        </li>
                    </>
                )}

            </ul>
        </nav >
    )
}
