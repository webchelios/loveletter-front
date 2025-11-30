import { useEffect, useState } from "react";
import { getMovies } from "../movies/actions/get-movies";
import type { Movie } from "../movies/interfaces/Movie.interface";
import { MovieList } from "../movies/components/MovieList";
import { SearchMovie } from "../movies/components/SearchMovie";
import { searchMovies } from "../movies/actions/search-movies";

export const MoviesPage = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [error, setError] = useState<string>("");

    const fetchMovies = async () => {
        try {
            setError("")
            const data = await getMovies();
            setMovies(data);
        } catch (err) {
            setError("Error al cargar las películas")
        }
    };

    const searchMovie = async (value: string) => {
        try {
            setError("")
            if (value === "") {
                await fetchMovies();
                return
            }
            const result = await searchMovies(value)
            setMovies(result);
        } catch (err) {
            setError("Error al buscar películas")
        }
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div>
            <h1>Películas</h1>
            <SearchMovie searchMovie={searchMovie} />
            {
                error && <p>{error}</p>
            }
            {
                movies.map((movie) => {

                    if (movie.status) {
                        return <MovieList key={movie._id} movie={movie} />
                    }
                    return null
                })
            }
        </div>
    );
};