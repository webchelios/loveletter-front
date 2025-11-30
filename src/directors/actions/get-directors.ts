import type { Director } from "../interfaces/Director.interface";

export const getDirectors = async (): Promise<Director[]> => {
    try {
        const response = await fetch("http://localhost:3000/directors");

        if (!response.ok) {
            throw new Error("Error al obtener todos los directores");
        }

        return await response.json();
    } catch (error) {
        console.error("Error en [getDiretors.ts]:", error);
        throw error;
    }
};