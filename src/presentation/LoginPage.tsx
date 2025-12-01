import { useContext, useState } from "react"
import { AuthContext } from "../auth/context/AuthContext";

export const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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
            console.log("Login exitoso");
        } catch (error) {
            console.error(error);
            alert("Usuario o contraseña incorrectos");
        }
        setEmail("");
        setPassword("");
    };

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            setEmail("")
            setPassword("")
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                id="email"
                type="email"
                placeholder="Ingresar email"
                value={email}
                onChange={onChangeEmail}
                onKeyDown={onKeyDown}
            />
            <input
                id="password"
                type="password"
                placeholder="Ingresar contraseña"
                value={password}
                onChange={onChangePassword}
                onKeyDown={onKeyDown}
            />
            <button type="submit">Buscar</button>
        </form>
    )
}
