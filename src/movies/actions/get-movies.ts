import type { Movie } from "../interfaces/Movie.interface";

export const getMovies = async (): Promise<Movie[]> => {
    try {
        const response = await fetch("http://localhost:3000/movies");

        if (!response.ok) {
            throw new Error("Error al obtener las películas");
        }

        return await response.json();
    } catch (error) {
        console.error("Error en [getMovies.ts]:", error);
        throw error;
    }
};