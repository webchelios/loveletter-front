import { useContext } from "react";
import { AuthContext } from "../../../auth/context/AuthContext";
import { deleteDirector } from "../actions/delete-director";
import './DirectorsList.css'

interface Props {
    _id: string;
    name: string;
    surname: string;
    age: number;
    status: boolean;
    onDelete: (id: string) => void;
}

export const DirectorsList = ({ _id, name, surname, age, status, onDelete }: Props) => {

    const { token } = useContext(AuthContext)

    const handleDeleteDirector = async () => {
        await deleteDirector(_id, token!)
        onDelete(_id)
    }

    return (
        status && (

            <div className="director-admin-card">

                <p><strong>Nombre:</strong> {name}</p>
                <p><strong>Apellido:</strong> {surname}</p>
                <p><strong>Edad:</strong> {age}</p>

                <button className="director-admin-btn-danger" onClick={handleDeleteDirector}>
                    Eliminar
                </button>


            </div>
        )
    )
}