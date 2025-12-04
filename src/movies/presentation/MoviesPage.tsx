import { useEffect, useState } from "react";
import { getMovies } from "../actions/get-movies";
import type { Movie } from "../interfaces/Movie.interface";
import { MovieList } from "../components/MovieList";
import { SearchMovie } from "../components/SearchMovie";
import { searchMovies } from "../actions/search-movies";
import { Link } from "react-router";
import "./MoviesPage.css"

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
        <div className="movies-container">
            <h1>Películas</h1>
            <Link to="/crear-pelicula">Crear película</Link>

            <SearchMovie searchMovie={searchMovie} />

            {error && <p>{error}</p>}

            {!error && movies.length === 0 && <p>No hay películas</p>}

            {movies.map((movie) => {
                if (movie.status) {
                    return <MovieList key={movie._id} movie={movie} />
                }
                return null;
            })}
        </div>
    );
};