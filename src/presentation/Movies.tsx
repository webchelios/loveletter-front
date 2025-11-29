import { useEffect, useState } from "react";
import { getMovies } from "../actions/get-movies";
import type { Movie } from "../interfaces/Movie.interface";

export const Movies = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    const fetchMovies = async () => {
        const data = await getMovies();
        setMovies(data);
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div>
            {movies.map((movie) => (
                <p key={movie._id}>{movie.title}</p>
            ))}
        </div>
    );
};