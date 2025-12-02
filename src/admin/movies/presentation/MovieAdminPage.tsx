import { useEffect, useState } from "react"
import { MoviesList } from "../../components/MoviesList"
import { getMovies } from "../../../movies/actions/get-movies"
import type { Movie } from "../../../movies/interfaces/Movie.interface"

export const MovieAdminPage = () => {

    const [movies, setMovies] = useState<Movie[]>([])

    const handleGetMovies = async () => {
        const allMovies = await getMovies()
        setMovies(allMovies)
    }

    useEffect(() => {
        handleGetMovies()
    }, [])

    return (
        <div>
            <h1>Listado</h1>
            <MoviesList movies={movies} />
        </div>
    )
}
