export const editUser = async (id: string, data: any, token: string) => {

    const res = await fetch(`http://localhost:3000/users/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            token
        },
        body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error("Error al actualizar el usuario");

    return await res.json();
};