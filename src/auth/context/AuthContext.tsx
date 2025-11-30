import { createContext, useState } from "react";

interface AuthContextProps {
    isAuthenticated: boolean;
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

    const login = (jwt: string) => {
        localStorage.setItem("token", jwt);
        setToken(jwt);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
    };

    const isAuthenticated = !!token;

    return (
        <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};