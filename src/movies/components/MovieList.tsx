import './MovieList.css'
import type { Movie } from "../interfaces/Movie.interface"

interface Props {
    movie: Movie;
}

export const MovieList = ({ movie }: Props) => {
    return (
        <div className='movie-container'>
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
            <p>{movie.synopsis}</p>
            <p>Director: {movie.director}</p>
        </div>
    )
}
