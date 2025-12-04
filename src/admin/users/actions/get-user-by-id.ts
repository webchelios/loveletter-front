import type { User } from "../../../auth/interfaces/user.interface";

export const getUserById = async (id: string): Promise<User> => {
    try {
        const response = await fetch(`http://localhost:3000/users/${id}`);

        if (!response.ok) {
            throw new Error("Error al obtener usuario");
        }

        return await response.json();
    } catch (error) {
        console.error("Error en [get-user-by-id.ts]:", error);
        throw error;
    }
};