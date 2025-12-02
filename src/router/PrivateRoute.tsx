import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";

interface PrivateRouteProps {
    children: React.ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { isAdmin } = useContext(AuthContext);

    return isAdmin ? <>{children}</> : <></>;
};