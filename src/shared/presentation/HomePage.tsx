import { useContext } from "react"
import { AuthContext } from "../../auth/context/AuthContext"

export const HomePage = () => {

    const { authUser } = useContext(AuthContext)

    return (
        <div>
            <h1>Una <span style={{ textDecoration: 'line-through' }}>carta</span> web de amor al cine</h1>

            {
                authUser
                    ? <><p>¡Bienvenido {authUser.username}!</p></>
                    : <>
                        <p>Registrate para comenzar a explorar</p>
                        <a href="/registrarse">Registrarse</a>
                    </>
            }

        </div>
    )
}
