import { useContext } from "react";
import { AuthContext } from "../auth/context/authContext";
import { Navigate } from "react-router";

interface PrivateRouteProps {
    children: React.ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};