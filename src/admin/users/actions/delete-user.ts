export const deleteUser = async (_id: string, token: string) => {
    try {
        const res = await fetch(`http://localhost:3000/users/${_id}`, {
            method: "DELETE",
            headers: {
                "token": token,
            },
        });
        if (!res.ok) throw new Error("Error al intentar eliminar un usuario");
    } catch (error) {
        console.error("Error en [delete-user.ts]:", error);
        throw error;
    }

};