import { useParams, useNavigate } from "react-router";
import { useEffect, useState, useContext } from "react";

import { editUser } from "../actions/edit-user";
import { AuthContext } from "../../../auth/context/AuthContext";
import { getUserById } from "../actions/get-user-by-id";

interface EditUserForm {
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
    })

    const handleGetUserById = async () => {
        const data = await getUserById(id!)
        setForm({
            name: data.name,
            username: data.username,
            role: data.role,
        })
    }

    useEffect(() => {
        handleGetUserById()
    }, [id, token]);

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, name: event.target.value });
    };

    const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, username: event.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await editUser(id!, form, token!);
        navigate("/administracion/usuarios");
    };

    return (
        <div>
            <h1>Editar Usuario</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre completo</label>
                <input name="name" value={form.name} onChange={handleChangeName} autoComplete="off" />
                <label htmlFor="username">Nombre de usuario</label>
                <input name="username" value={form.username} onChange={handleChangeUsername} autoComplete="off" />

                <button type="submit">Guardar cambios</button>
            </form>
        </div>
    );
};