import { Movie } from "../interfaces/Movie.interface";

export const getMovies = async (): Promise<Movie[]> => {
    const response = await fetch("http://localhost:3000/movies");
    if (!response.ok) throw new Error("Hubo un error al buscar todas las películas");

    return await response.json();
};