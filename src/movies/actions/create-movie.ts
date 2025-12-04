import type { CreateMovieForm } from "../presentation/CreateMoviePage";

export const createMovie = async ({ title, synopsis, year, director }: CreateMovieForm) => {
    try {
        const res = await fetch("http://localhost:3000/movies/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, synopsis, year, director })
        });
        if (!res.ok) throw new Error("Error al crear película");

    } catch (error) {
        console.error("Error en [create-movie.ts]:", error);
        throw error;
    }

};