export interface LoggedUser {
    jwToken: string;
    user: User;
}

export interface User {
    _id: string;
    username: string;
    name: string;
    email: string;
    image?: string;
    role?: string;
    status: boolean;
}