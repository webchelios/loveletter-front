import { useParams, useNavigate } from "react-router";
import { useEffect, useState, useContext } from "react";

import { editUser } from "../actions/edit-user";
import { AuthContext } from "../../../auth/context/AuthContext";
import { getUserById } from "../actions/get-user-by-id";
import './EditUserPage.css'

export interface EditUserForm {
    name: string;
    username: string;
    role?: string;
}

export const EditUserPage = () => {

    const { id } = useParams();
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();

    const [form, setForm] = useState<EditUserForm>({
        name: "",
        username: "",
        role: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        username: "",
    });

    const validate = () => {
        const newErrors = {
            name: "",
            username: "",
        };

        if (!form.name.trim()) newErrors.name = "El nombre es obligatorio";
        if (!form.username.trim()) newErrors.username = "El nombre de usuario es obligatorio";

        setErrors(newErrors);

        return Object.values(newErrors).every(err => err === "");
    };

    const handleGetUserById = async () => {
        const data = await getUserById(id!);
        setForm({
            name: data.name,
            username: data.username,
            role: data.role,
        });
    };

    useEffect(() => {
        handleGetUserById();
    }, [id, token]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validate()) return;

        await editUser(id!, form, token!);
        navigate("/administracion/usuarios");
    };

    return (
        <div className="edit-user-page">
            <h1>Editar Usuario</h1>

            <form onSubmit={handleSubmit} className="admin-form">

                <label htmlFor="name">Nombre completo</label>
                <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="off"
                />
                {errors.name && <p className="error">{errors.name}</p>}

                <label htmlFor="username">Nombre de usuario</label>
                <input
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    autoComplete="off"
                />
                {errors.username && <p className="error">{errors.username}</p>}

                <button type="submit" className="admin-btn">Guardar cambios</button>
            </form>
        </div>
    );
};