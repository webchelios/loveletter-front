import { useEffect, useState } from "react";
import { getMovies } from "../providers/getMovies";

export const Movies = () => {
    const [movies, setMovies] = useState<Movie>([]);

    useEffect(() => {
        getMovies().then((data) => {
            setMovies(data);
        });
    }, []);

    return (
        <div>
            {movies.map((movie) => (
                <p key={movie._id}>{movie.title}</p>
            ))}
        </div>
    );
};