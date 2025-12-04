export const deleteDirector = async (_id: string, token: string) => {
    try {
        const res = await fetch(`http://localhost:3000/directors/${_id}`, {
            method: "DELETE",
            headers: {
                "token": token,
            },
        });
        if (!res.ok) throw new Error("Error al intentar eliminar un director");
    } catch (error) {
        console.error("Error en [delete-director.ts]:", error);
        throw error;
    }

};