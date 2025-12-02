import type { User } from "../../../auth/interfaces/user.interface";

export const getUsers = async (): Promise<User[]> => {
    try {
        const response = await fetch("http://localhost:3000/users");

        if (!response.ok) {
            throw new Error("Error al obtener todos los usuarios");
        }

        return await response.json();
    } catch (error) {
        console.error("Error en [getDiretors.ts]:", error);
        throw error;
    }
};