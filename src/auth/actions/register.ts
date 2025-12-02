import type { LoggedUser } from "../interfaces/user.interface";

export const registerAction = async (email: string, password: string, name: string, username: string,): Promise<LoggedUser> => {
    try {
        const res = await fetch("http://localhost:3000/users/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password, name, username })
        });
        if (!res.ok) throw new Error("Error al ingresar credenciales");

        const data = await res.json();
        console.log('[register.ts] data:', data)
        return data;
    } catch (error) {
        console.error("Error en [register.ts]:", error);
        throw error;
    }

};