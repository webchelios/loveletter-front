import { useContext } from "react"
import { AuthContext } from "../../auth/context/AuthContext"
import { Link } from "react-router"
import './HomePage.css'

export const HomePage = () => {

    const { authUser } = useContext(AuthContext)

    return (
        <div className="home-container">
            <h1 className="home-title">¡Una carta web de amor al cine!</h1>

            {
                authUser
                    ? <>
                        <p>¡Bienvenido {authUser.username}! Ayudanos a contribuir a nuestra base de datos</p>
                        <Link to="/crear-director">Crear director</Link>
                        <Link to="/crear-pelicula">Crear película</Link>
                    </>
                    : <>
                        <p>Registrate para comenzar a explorar</p>
                        <Link to="/registrarse">Registrarse</Link>
                    </>
            }

        </div>
    )
}
