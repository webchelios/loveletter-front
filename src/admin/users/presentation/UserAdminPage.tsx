import { useEffect, useState } from "react"
import type { User } from "../../../auth/interfaces/user.interface"
import { getUsers } from "../actions/get-users"
import { UsersList } from "../components/UsersList"


export const UserAdminPage = () => {

    const [users, setUsers] = useState<User[]>([])

    const handleGetUsers = async () => {
        const usersData = await getUsers()
        setUsers(usersData)
    }

    const handleDelete = async (id: string) => {
        setUsers(prev => prev.filter(user => user._id !== id));
    }

    const handleUpdate = (id: string, data: { role: string }) => {
        setUsers(prev =>
            prev.map(user =>
                user._id === id
                    ? { ...user, role: data.role }
                    : user
            )
        );
    };

    useEffect(() => {
        handleGetUsers()
    }, [])

    return (
        <>
            <h2>Todos los usuarios</h2>
            {
                users.map((user) => (
                    <UsersList key={user._id} {...user} onDelete={handleDelete} onUpdate={handleUpdate} />
                ))
            }

        </>
    )
}
