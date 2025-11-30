import type { Director } from "../interfaces/Director.interface";

export const searchDirectors = async (value: string): Promise<Director[]> => {
    try {
        const response = await fetch(`http://localhost:3000/directors/search?surname=${value}`);
        if (!response.ok) {
            throw new Error("Error al buscar directores");
        }

        return await response.json();
    } catch (error) {
        console.error("Error en [search-directors.ts]:", error);
        throw error;
    }
};