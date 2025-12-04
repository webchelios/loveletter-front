export const deleteMovie = async (_id: string, token: string) => {
    try {
        const res = await fetch(`http://localhost:3000/movies/${_id}`, {
            method: "DELETE",
            headers: {
                "token": token,
            },
        });
        if (!res.ok) throw new Error("Error al intentar eliminar una película");
    } catch (error) {
        console.error("Error en [delete-movie.ts]:", error);
        throw error;
    }

};