import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import "./UsersPage.css"

export const UsersPage = () => {
    const { authUser } = useContext(AuthContext)

    return (
        <div className="user-profile-container">
            <h1>Bienvenido {authUser?.username}</h1>

            <div className="user-data">
                <p><strong>Nombre completo:</strong> {authUser?.name}</p>
                <p><strong>Correo electrónico:</strong> {authUser?.email}</p>
                <p><strong>Tipo de usuario:</strong> {authUser?.role ? "Administrador" : "Usuario normal"}</p>
            </div>
        </div>
    )
}