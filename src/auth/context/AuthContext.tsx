import { createContext, useState } from "react";
import { loginAction } from "../actions/login";
import { registerAction } from "../actions/register";
import type { LoggedUser } from "../interfaces/user.interface";

interface AuthContextProps {
    token: string | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    register: (email: string, password: string, name: string, username: string) => Promise<LoggedUser>
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

    const login = async (email: string, password: string) => {
        // const response = await fetch("http://localhost:3000/users/login", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ email, password })
        // });

        // if (!response.ok) {
        //     throw new Error("Credenciales inválidas");
        // }

        const data = await loginAction(email, password);
        setToken(data.jwToken);
        localStorage.setItem("token", data.jwToken);
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem("token");
    };

    const register = async (email: string, password: string, name: string, username: string) => {
        return await registerAction(email, password, name, username)
    }

    return (
        <AuthContext.Provider value={{
            token,
            isAuthenticated: Boolean(token),
            login,
            logout,
            register
        }}>
            {children}
        </AuthContext.Provider>
    );
};