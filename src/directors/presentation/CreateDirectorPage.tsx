import { useState } from "react";
import { useNavigate } from "react-router";
import { createDirector } from "../actions/create-director";
import './CreateDirectorPage.css'

export interface CreateDirectorForm {
    name: string;
    surname: string;
    age: number;
}

export const CreateDirectorPage = () => {

    const [form, setForm] = useState<CreateDirectorForm>({
        name: "",
        surname: "",
        age: 0
    });

    const [error, setError] = useState<string>("");

    const navigate = useNavigate();

    const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, name: event.target.value });
    };

    const handleOnChangeSurname = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, surname: event.target.value });
    };

    const handleOnChangeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, age: +event.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.name.trim()) return setError("El nombre es obligatorio");
        if (!form.surname.trim()) return setError("El apellido es obligatorio");
        if (form.age <= 0) return setError("La edad debe ser mayor a 0");

        setError("");

        await createDirector(form);
        navigate("/directores");
    };

    return (
        <form className="create-director-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre" onChange={handleOnChangeName} />
            <input type="text" placeholder="Apellido" onChange={handleOnChangeSurname} />
            <input type="number" placeholder="Edad" onChange={handleOnChangeAge} />

            {error && <p className="error-message">{error}</p>}

            <button type="submit">Crear</button>
        </form>
    );
};