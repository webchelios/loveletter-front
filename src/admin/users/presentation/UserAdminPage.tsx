import { useEffect, useState } from "react";
import type { User } from "../../../auth/interfaces/user.interface";
import { getUsers } from "../actions/get-users";
import { UsersList } from "../components/UsersList";
import "./UserAdminPage.css";
import { Link } from "react-router";

export const UserAdminPage = () => {

    const [users, setUsers] = useState<User[]>([]);

    const handleGetUsers = async () => {
        const usersData = await getUsers();
        setUsers(usersData);
    };

    const handleDelete = async (id: string) => {
        setUsers(prev => prev.filter(user => user._id !== id));
    };

    const handleUpdate = (id: string, data: { role: string }) => {
        setUsers(prev =>
            prev.map(user =>
                user._id === id ? { ...user, role: data.role } : user
            )
        );
    };

    useEffect(() => {
        handleGetUsers();
    }, []);

    return (
        <div className="admin-container">
            <p className="breadcrumb"><Link to="/administracion">Panel </Link>/ Usuarios</p>
            <h2 className="admin-title">Todos los usuarios</h2>

            <div className="admin-grid">
                {users.map((user) => (
                    <UsersList
                        key={user._id}
                        {...user}
                        onDelete={handleDelete}
                        onUpdate={handleUpdate}
                    />
                ))}
            </div>
        </div>
    );
};