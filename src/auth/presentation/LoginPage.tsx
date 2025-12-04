import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import "./LoginPage.css";

export const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        setErrors({ ...errors, email: "" });
    };

    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
        setErrors({ ...errors, password: "" });
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { email: "", password: "" };

        if (!email.trim()) {
            newErrors.email = "El email es obligatorio";
            isValid = false;
        }

        if (!password.trim()) {
            newErrors.password = "La contraseña es obligatoria";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validateForm()) return;

        try {
            await login(email, password);
            navigate("/peliculas");
        } catch (error) {
            console.error(error);
            setErrors({ email: "", password: "Credenciales incorrectas" });
        }

        setEmail("");
        setPassword("");
    };

    return (
        <form className="login-form" onSubmit={onSubmit}>
            <div>
                <input
                    id="email"
                    type="email"
                    placeholder="Ingresar email"
                    value={email}
                    onChange={onChangeEmail}
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div>
                <input
                    id="password"
                    type="password"
                    placeholder="Ingresar contraseña"
                    value={password}
                    onChange={onChangePassword}
                />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <button type="submit">Iniciar sesión</button>
        </form>
    );
};