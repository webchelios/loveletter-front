import { useContext, useState } from "react"
import { AuthContext } from "../auth/context/AuthContext";
import { useNavigate } from "react-router";

export const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const { login } = useContext(AuthContext);

    const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await login(email, password);
            navigate("/peliculas");
        } catch (error) {
            console.error(error);
        }
        setEmail("");
        setPassword("");
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                id="email"
                type="email"
                placeholder="Ingresar email"
                value={email}
                onChange={onChangeEmail}
            />
            <input
                id="password"
                type="password"
                placeholder="Ingresar contraseña"
                value={password}
                onChange={onChangePassword}
            />
            <button type="submit">Buscar</button>
        </form>
    )
}
