import { Link } from 'react-router'
import './NavBar.css'

export const NavBar = () => {

    return (
        <nav>
            <h1><Link to="/">Loveletter</Link></h1>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/peliculas">Peliculas</Link></li>
                <li><Link to="/directores">Directores</Link></li>
                <li><Link to="/cuenta">Cuenta</Link></li>
            </ul>
        </nav >
    )
}