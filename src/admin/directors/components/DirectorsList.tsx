import { useContext } from "react";
import { AuthContext } from "../../../auth/context/AuthContext";
import { deleteDirector } from "../actions/delete-director";

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
        status &&

        <div style={{ border: '1px solid black', margin: '1rem', padding: '1rem' }}>
            <p>Nombre: {name}</p>
            <p>Apellido: {surname}</p>
            <p>Edad: {age}</p>


            <button onClick={handleDeleteDirector}>Eliminar</button>


        </div>

    )
}
