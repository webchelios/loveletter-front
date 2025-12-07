import { useContext } from "react";
import { AuthContext } from "../../../auth/context/AuthContext";
import { deleteMovie } from "../actions/delete-movie";
import './MoviesList.css'

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
        status && (
            <div className="movie-admin-item">
                <p><strong>Título:</strong> {title}</p>
                <p><strong>Sinopsis:</strong> {synopsis}</p>
                <p><strong>Año:</strong> {year}</p>
                <p><strong>Director:</strong> {director}</p>

                <button className="movie-admin-button" onClick={handleDeleteMovie}>Eliminar</button>

            </div>
        )
    )
}