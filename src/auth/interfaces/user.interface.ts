export interface LoggedUser {
    jwToken: string;
    usuario: User;
}

export interface User {
    _id: string;
    username: string;
    name: string;
    email: string;
}