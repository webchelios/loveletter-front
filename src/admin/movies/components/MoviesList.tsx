import { useContext } from "react";
import { AuthContext } from "../../../auth/context/AuthContext";
import { deleteMovie } from "../actions/delete-movie";

interface Props {
    _id: string;
    title: string;
    synopsis: string;
    year: number;
    director: string;
    status: boolean;
    onDelete: (id: string) => void;
}

export const MoviesList = ({ _id, title, synopsis, year, director, status, onDelete }: Props) => {

    const { token } = useContext(AuthContext)

    const handleDeleteMovie = async () => {
        await deleteMovie(_id, token!)
        onDelete(_id)
    }


    return (
        status &&

        <div style={{ border: '1px solid black', margin: '1rem', padding: '1rem' }}>
            <p>Título: {title}</p>
            <p>Sinopsis: {synopsis}</p>
            <p>Año: {year}</p>
            <p>Director: {director}</p>

            <button onClick={handleDeleteMovie}>Eliminar</button>


        </div>

    )
}
