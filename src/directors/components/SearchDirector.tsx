import { useState } from "react"
import './SearchDirector.css'

interface Props {
    searchDirector: (value: string) => void;
}

export const SearchDirector = ({ searchDirector }: Props) => {

    const [inputValue, setInputValue] = useState("")

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        searchDirector(inputValue)
        setInputValue("")
    }

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            searchDirector(inputValue);
            setInputValue("");
        }
    };

    return (
        <form className="search-director-form" onSubmit={onSubmit}>
            <input
                id="title"
                type="text"
                placeholder="Buscar director"
                value={inputValue}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <button type="submit">Buscar</button>
        </form>
    );
}
