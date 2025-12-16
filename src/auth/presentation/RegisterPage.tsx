import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import './RegisterPage.css'

export const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        name: "",
        username: "",
    });

    const { register, login } = useContext(AuthContext);
    const navigate = useNavigate();

    const validateEmail = (value: string) => {
        if (!value.includes("@")) return "Email inválido";
        return "";
    };

    const validatePassword = (value: string) => {
        if (value.length < 6) return "Mínimo 6 caracteres";
        return "";
    };

    const validateName = (value: string) => {
        if (value.trim().length < 3) return "Nombre muy corto";
        return "";
    };

    const validateUsername = (value: string) => {
        if (value.trim().length < 3) return "Usuario muy corto";
        return "";
    };

    const validateForm = () => {
        const newErrors = {
            email: validateEmail(email),
            password: validatePassword(password),
            name: validateName(name),
            username: validateUsername(username),
        };

        setErrors(newErrors);

        return Object.values(newErrors).every((err) => err === "");
    };



    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);
        setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
    };

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);
        setErrors((prev) => ({ ...prev, password: validatePassword(value) }));
    };

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setName(value);
        setErrors((prev) => ({ ...prev, name: validateName(value) }));
    };

    const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setUsername(value);
        setErrors((prev) => ({ ...prev, username: validateUsername(value) }));
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validateForm()) return;

        try {
            await register(email, password, name, username);
            await login(email, password);
            navigate("/usuario");
        } catch (error) {
            console.error(error);
        }

        setEmail("");
        setPassword("");
        setName("");
        setUsername("");

        setErrors({
            email: "",
            password: "",
            name: "",
            username: "",
        });
    };

    return (
        <div className="auth-register-container">
            <div>
                <h1 className="auth-title">Registro</h1>

                <form className="register-form" onSubmit={onSubmit}>
                    <input
                        type="email"
                        placeholder="Ingresar email"
                        value={email}
                        onChange={onChangeEmail}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}

                    <input
                        type="password"
                        placeholder="Ingresar contraseña"
                        value={password}
                        onChange={onChangePassword}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}

                    <input
                        type="text"
                        placeholder="Ingresar nombre y apellido"
                        value={name}
                        onChange={onChangeName}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}

                    <input
                        type="text"
                        placeholder="Crear nombre de usuario"
                        value={username}
                        onChange={onChangeUsername}
                    />
                    {errors.username && <p className="error">{errors.username}</p>}

                    <button type="submit">Registrarse</button>
                </form>
            </div>

            <div className="auth-register-image">
                <img src="./images/m.webp" alt="" />
            </div>
        </div>
    );
};