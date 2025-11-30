import type { Movie } from "../interfaces/Movie.interface";

export const searchMovies = async (value: string): Promise<Movie[]> => {
    try {
        const response = await fetch(`http://localhost:3000/movies/search?title=${value}`);

        if (!response.ok) {
            throw new Error("Error al buscar películas");
        }

        return await response.json();
    } catch (error) {
        console.error("Error en [search-movies.ts]:", error);
        throw error;
    }
};