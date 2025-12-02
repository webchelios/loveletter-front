import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const UsersPage = () => {
    const { authUser } = useContext(AuthContext)
    return (
        <>
            <h1>Bienvenido {authUser?.username}</h1>
            <p>Nombre completo: {authUser?.name}</p>
            <p>Correo electrónico: {authUser?.email}</p>

        </>
    )
}
