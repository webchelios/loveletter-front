import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

export const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("")

    const { register, login } = useContext(AuthContext);

    const navigate = useNavigate()

    const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await register(email, password, name, username);
            await login(email, password);

            navigate("/usuario")
        } catch (error) {
            console.error(error);
            alert("Error al registrar");
        }

        setEmail("");
        setPassword("");
        setName("");
        setUsername("");
    };

    return (
        <>
            <h1>Register</h1>
            <form onSubmit={onSubmit}>

                <input
                    type="email"
                    placeholder="Ingresar email"
                    value={email}
                    onChange={onChangeEmail}
                />

                <input
                    type="password"
                    placeholder="Ingresar contraseña"
                    value={password}
                    onChange={onChangePassword}
                />
                <input
                    type="text"
                    placeholder="Ingresar nombre y apellido"
                    value={name}
                    onChange={onChangeName}
                />
                <input
                    type="text"
                    placeholder="Crear nombre de usuario"
                    value={username}
                    onChange={onChangeUsername}
                />

                <button type="submit">Registrarse</button>
            </form>
        </>

    );
};