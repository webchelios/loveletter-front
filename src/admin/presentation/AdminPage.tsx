import { Link } from "react-router"

export const AdminPage = () => {
    return (
        <>
            <Link to="/administracion/usuarios">

                <div>
                    <h2>Administrar usuarios</h2>
                </div>
            </Link>
            <Link to="/administracion/peliculas">

                <div>
                    <h2>Administrar películas</h2>
                </div>
            </Link>
            <Link to="/administracion/directores">

                <div>
                    <h2>Administrar directores</h2>
                </div>
            </Link>
        </>
    )
}
