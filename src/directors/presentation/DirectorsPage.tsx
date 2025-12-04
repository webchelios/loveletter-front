import { useEffect, useState } from "react";
import { getDirectors } from "../actions/get-directors";
import { searchDirectors } from "../actions/search-directors";
import { SearchDirector } from "../components/SearchDirector";
import { DirectorList } from "../components/DirectorList";
import type { Director } from "../interfaces/Director.interface";
import { Link } from "react-router";
import './DirectorsPage.css'


export const DirectorsPage = () => {
    const [directors, setDirectors] = useState<Director[]>([]);
    const [error, setError] = useState<string>("")

    const fetchDirectors = async () => {
        try {
            setError("")
            const data = await getDirectors();
            setDirectors(data);
        } catch (err) {
            setError("Hubo un error al traer los directores")
        }
    };

    const searchDirector = async (value: string) => {
        try {
            setError("")
            if (value === "") {
                await fetchDirectors();
                return
            }
            const result = await searchDirectors(value)
            setDirectors(result);
        } catch (err) {
            setError("Error al buscar directores")
        }
    }

    useEffect(() => {
        fetchDirectors();
    }, []);

    return (
        <div className="directors-container">
            <h1>Directores</h1>

            <Link to="/crear-director">Crear director</Link>

            <SearchDirector searchDirector={searchDirector} />

            {error && <p>{error}</p>}

            {!error && directors.length === 0 && (
                <p>No hay directores</p>
            )}

            {directors.map((director) =>
                director.status ? (
                    <DirectorList key={director._id} director={director} />
                ) : null
            )}
        </div>
    );
};