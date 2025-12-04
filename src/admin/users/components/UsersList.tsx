import { useContext } from "react";
import { AuthContext } from "../../../auth/context/AuthContext";
import { useNavigate } from "react-router";
import { deleteUser } from "../actions/delete-user";
import { editUser } from "../actions/edit-user";
import './UsersList.css'

interface Props {
    _id: string;
    name: string;
    username: string;
    email: string;
    image?: string;
    role?: string;
    status: boolean;
    onDelete: (id: string) => void;
    onUpdate: (id: string, data: { role: string }) => void;
}

export const UsersList = ({ _id, name, username, email, image, role, status, onDelete, onUpdate }: Props) => {

    const { token } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleDeleteUser = async () => {
        await deleteUser(_id, token!)
        onDelete(_id)
    }

    const handleEditUser = () => {
        navigate(`/administracion/usuarios/editar/${_id}`)
    }

    const handleSetAdmin = async () => {
        await editUser(_id, { role: "admin" }, token!);
        onUpdate(_id, { role: "admin" });
    }

    return (
        status &&
        <div className="user-card-admin">

            <p><strong>Nombre completo:</strong> {name}</p>
            <p><strong>Nombre de usuario:</strong> {username}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Imagen:</strong> {image ? image : "No tiene"}</p>
            <p><strong>Rol:</strong> {role ? role : "Usuario común"}</p>

            {role !== "admin" && (
                <div className="admin-card-actions">
                    <button className="admin-btn" onClick={handleEditUser}>Editar</button>
                    <button className="admin-btn admin-delete" onClick={handleDeleteUser}>Eliminar</button>
                    <button className="admin-btn admin-promote" onClick={handleSetAdmin}>Hacer Administrador</button>
                </div>
            )}

        </div>
    );
};