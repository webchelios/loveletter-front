import { NavLink, useNavigate } from 'react-router'
import './NavBar.css'
import { PrivateRoute } from '../../router/PrivateRoute'
import { useContext, useState } from 'react';
import { AuthContext } from '../../auth/context/AuthContext';

export const NavBar = () => {
    const { logout, authUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate("/");
        setOpen(false);
    };

    const closeMenu = () => setOpen(false);

    return (
        <nav>
            <h1>
                <NavLink to="/" onClick={closeMenu}>
                    <span className="love-font">Love</span>letter
                </NavLink>
            </h1>

            <div
                className={`hamburger ${open ? "active" : ""}`}
                onClick={() => setOpen(!open)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={open ? "open" : ""}>
                <li><NavLink to="/" onClick={closeMenu}>Inicio</NavLink></li>
                <li><NavLink to="/peliculas" onClick={closeMenu}>Peliculas</NavLink></li>
                <li><NavLink to="/directores" onClick={closeMenu}>Directores</NavLink></li>

                {!authUser && (
                    <>
                        <li><NavLink to="/loguearse" onClick={closeMenu}>Iniciar Sesión</NavLink></li>
                        <li><NavLink to="/registrarse" onClick={closeMenu}>Registrarse</NavLink></li>
                    </>
                )}

                <PrivateRoute>
                    <li><NavLink to="/administracion" onClick={closeMenu}>Panel de administración</NavLink></li>
                </PrivateRoute>

                {authUser && (
                    <>
                        <li><NavLink to="/usuario" onClick={closeMenu}>Perfil</NavLink></li>
                        <li>
                            <button onClick={handleLogout}>Cerrar sesión</button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};