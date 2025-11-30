import { Link } from 'react-router'
import './NavBar.css'
import { PrivateRoute } from '../../router/PrivateRoute'
import { useContext } from 'react';
import { AuthContext } from '../../auth/context/authContext';

export const NavBar = () => {
    const { logout } = useContext(AuthContext);

    return (
        <nav>
            <h1><Link to="/">Loveletter</Link></h1>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/peliculas">Peliculas</Link></li>
                <li><Link to="/directores">Directores</Link></li>
                <li><Link to="/cuenta">Cuenta</Link></li>
                <PrivateRoute>
                    <li>Dashboard</li>
                </PrivateRoute>


                <button onClick={logout}>Cerrar sesión</button>
            </ul>
        </nav >
    )
}