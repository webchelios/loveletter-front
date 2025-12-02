import { useContext } from "react";

import { AuthContext } from "../../../auth/context/AuthContext";
import { useNavigate } from "react-router";
import { deleteUser } from "../actions/delete-user";
import { editUser } from "../actions/edit-user";


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

    const handleEditUser = async () => {
        navigate(`/administracion/usuarios/editar/${_id}`)
    }

    const handleSetAdmin = async () => {
        await editUser(_id, { role: "admin" }, token!);
        onUpdate(_id, { role: "admin" });
    }

    return (
        status &&
        <div style={{ border: '1px solid black', margin: '1rem', padding: '1rem' }}>
            <p>nombre completo: {name}</p>
            <p>nombre de usuario: {username}</p>
            <p>email: {email}</p>
            <p>imagen: {image ? image : 'No tiene'}</p>
            <p>rol: {role ? role : 'Es usuario común'}</p>
            {
                role !== "admin" && <>
                    <button onClick={handleEditUser}>Editar</button>
                    <button onClick={handleDeleteUser}>Eliminar</button>
                    <button onClick={handleSetAdmin}>Hacer Administrador</button>
                </>

            }
        </div>
    )
}
