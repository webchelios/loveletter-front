import { useEffect, useState } from "react";
import { getMovies } from "../movies/actions/get-movies";
import type { Movie } from "../movies/interfaces/Movie.interface";
import { MovieList } from "../movies/components/MovieList";

export const MoviesPage = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [error, setError] = useState<string>("");

    const fetchMovies = async () => {
        try {
            const data = await getMovies();
            setMovies(data);
        } catch (err) {
            setError("Error al cargar las películas")
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div>
            <h1>Películas</h1>
            {
                error && <p>{error}</p>
            }
            {
                movies && movies.map((movie) => (
                    <MovieList key={movie._id} movie={movie} />
                ))
            }
        </div>
    );
};