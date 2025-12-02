import { createContext, useState } from "react";
import { loginAction } from "../actions/login";
import { registerAction } from "../actions/register";
import type { LoggedUser, User } from "../interfaces/user.interface";

interface AuthContextProps {
    token: string | null;
    isAdmin: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    register: (email: string, password: string, name: string, username: string) => Promise<LoggedUser>;
    authUser: User | null;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const storedUser = localStorage.getItem("user");
    const storedAdmin = localStorage.getItem("isAdmin");

    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
    const [authUser, setAuthUser] = useState<User | null>(storedUser ? JSON.parse(storedUser) : null);
    const [isAdmin, setIsAdmin] = useState<boolean>(storedAdmin ? JSON.parse(storedAdmin) : false);

    const login = async (email: string, password: string) => {
        const data = await loginAction(email, password);

        const admin = data.user.role === "admin";

        setIsAdmin(admin);
        setToken(data.jwToken);
        setAuthUser(data.user);

        localStorage.setItem("token", data.jwToken);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("isAdmin", JSON.stringify(admin));
    };

    const logout = () => {
        setToken(null);
        setAuthUser(null);
        setIsAdmin(false);

        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("isAdmin");
    };

    const register = async (email: string, password: string, name: string, username: string) => {
        return await registerAction(email, password, name, username);
    }

    return (
        <AuthContext.Provider value={{
            token,
            isAdmin,
            login,
            logout,
            register,
            authUser
        }}>
            {children}
        </AuthContext.Provider>
    );
};