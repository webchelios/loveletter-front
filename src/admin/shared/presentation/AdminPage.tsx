import { Link } from "react-router";
import "./AdminPage.css";

export const AdminPage = () => {
    return (
        <div className="admin-container">
            <h1 className="admin-title">Panel de Administración</h1>

            <div className="admin-grid">

                <Link to="/administracion/usuarios" className="admin-card">
                    <div>
                        <h2>Administrar usuarios</h2>
                    </div>
                </Link>

                <Link to="/administracion/peliculas" className="admin-card">
                    <div>
                        <h2>Administrar películas</h2>
                    </div>
                </Link>

                <Link to="/administracion/directores" className="admin-card">
                    <div>
                        <h2>Administrar directores</h2>
                    </div>
                </Link>

            </div>
        </div>
    );
};