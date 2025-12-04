import type { CreateDirectorForm } from "../presentation/CreateDirectorPage";

export const createDirector = async ({ name, surname, age }: CreateDirectorForm) => {
    try {
        const res = await fetch("http://localhost:3000/directors/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, surname, age })
        });
        if (!res.ok) throw new Error("Error al crear director");

    } catch (error) {
        console.error("Error en [create-director.ts]:", error);
        throw error;
    }

};