import { NavLink, useNavigate } from 'react-router'
import './NavBar.css'
import { PrivateRoute } from '../../router/PrivateRoute'
import { useContext } from 'react';
import { AuthContext } from '../../auth/context/AuthContext';

export const NavBar = () => {
    const { logout, authUser } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate("/")
    }

    return (
        <nav>
            <h1><NavLink to="/"><span className='love-font'>Love</span>letter</NavLink></h1>
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/peliculas">Peliculas</NavLink></li>
                <li><NavLink to="/directores">Directores</NavLink></li>

                {!authUser && (
                    <>
                        <li><NavLink to="/loguearse">Iniciar Sesión</NavLink></li>
                        <li><NavLink to="/registrarse">Registrarse</NavLink></li>
                    </>
                )}


                <PrivateRoute>
                    <li><NavLink to="/administracion">Panel de administración</NavLink></li>
                </PrivateRoute>

                {authUser && (
                    <>
                        <li><NavLink to="/usuario">Perfil</NavLink></li>
                        <li>
                            <button onClick={handleLogout}>Cerrar sesión</button>
                        </li>
                    </>
                )}

            </ul>
        </nav >
    )
}
