import type { LoggedUser } from "../interfaces/user.interface";

export const loginAction = async (email: string, password: string): Promise<LoggedUser> => {
    try {
        const res = await fetch("http://localhost:3000/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });
        if (!res.ok) throw new Error("Error al ingresar credenciales");

        const data = await res.json();

        return data;
    } catch (error) {
        console.error("Error en [login.ts]:", error);
        throw error;
    }

};