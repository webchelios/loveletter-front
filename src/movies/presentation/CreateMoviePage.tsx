import { useState } from "react";
import { useNavigate } from "react-router";
import { createMovie } from "../actions/create-movie";
import './CreateMoviePage.css'

export interface CreateMovieForm {
    title: string;
    synopsis: string;
    year: number;
    director: string;
}

export const CreateMoviePage = () => {
    const [form, setForm] = useState<CreateMovieForm>({
        title: "",
        synopsis: "",
        year: 0,
        director: "",
    });

    const [error, setError] = useState<string>("");

    const navigate = useNavigate();

    const handleOnChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, title: event.target.value });
    };

    const handleOnChangeSynopsis = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, synopsis: event.target.value });
    };

    const handleOnChangeYear = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, year: +event.target.value });
    };

    const handleOnChangeDirector = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, director: event.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.title.trim()) return setError("El título es obligatorio");
        if (!form.synopsis.trim()) return setError("La sinopsis es obligatoria");

        const currentYear = new Date().getFullYear();
        if (!form.year || form.year < 1888 || form.year > currentYear) {
            return setError("El año es inválido");
        }

        if (!form.director.trim()) return setError("El director es obligatorio");

        setError("");

        await createMovie(form);
        navigate("/peliculas");
    };

    return (
        <form className="create-movie-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Título" onChange={handleOnChangeTitle} />
            <input type="text" placeholder="Sinopsis" onChange={handleOnChangeSynopsis} />
            <input type="number" placeholder="Año" onChange={handleOnChangeYear} />
            <input type="text" placeholder="Director" onChange={handleOnChangeDirector} />

            {error && <p className="error">{error}</p>}

            <button type="submit">Crear</button>
        </form>
    );
};