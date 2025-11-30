export const login = async (email: string, password: string) => {
    const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    if (!res.ok) throw new Error("Credenciales incorrectas");

    const data = await res.json();
    localStorage.setItem("token", data.token); // 👈 guardar JWT

    return data;
};