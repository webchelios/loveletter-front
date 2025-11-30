import { useEffect, useState } from "react";
import type { Director } from "../directors/interfaces/Director.interface";
import { getDirectors } from "../directors/actions/get-directors";
import { DirectorList } from "../directors/components/DirectorList";

export const DirectorsPage = () => {
    const [directors, setDirectors] = useState<Director[]>([]);
    const [error, setError] = useState<string>("")

    const fetchDirectors = async () => {
        try {
            const data = await getDirectors();
            setDirectors(data);
        } catch (err) {
            setError("Hubo un error al traer los directores")
        }
    };

    useEffect(() => {
        fetchDirectors();
    }, []);

    return (
        <div>
            <h1>Películas</h1>
            {
                error && <p>{error}</p>
            }
            {
                directors.map((director) => (
                    <DirectorList key={director._id} director={director} />
                ))
            }
        </div>
    );
};