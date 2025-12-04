import { useState } from "react"
import './SearchMovie.css'

interface Props {
    searchMovie: (value: string) => void;
}

export const SearchMovie = ({ searchMovie }: Props) => {

    const [inputValue, setInputValue] = useState("")

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        searchMovie(inputValue)
        setInputValue("")
    }

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            searchMovie(inputValue);
            setInputValue("");
        }
    };

    return (
        <form className="search-form" onSubmit={onSubmit}>
            <input
                id="title"
                type="text"
                placeholder="Buscar película"
                value={inputValue}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <button type="submit">Buscar</button>
        </form>
    )
}
