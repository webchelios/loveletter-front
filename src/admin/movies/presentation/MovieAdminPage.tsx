import { useEffect, useState } from "react"
import { getMovies } from "../../../movies/actions/get-movies"
import type { Movie } from "../../../movies/interfaces/Movie.interface"
import { MoviesList } from "../components/MoviesList"
import './MovieAdminPage.css'
import { Link } from "react-router"

export const MovieAdminPage = () => {

    const [movies, setMovies] = useState<Movie[]>([])

    const handleGetMovies = async () => {
        const allMovies = await getMovies()
        setMovies(allMovies)
    }

    const handleDelete = async (id: string) => {
        setMovies(prev => prev.filter(movie => movie._id !== id));
    }

    useEffect(() => {
        handleGetMovies()
    }, [])

    return (
        <div className="movie-admin-container">
            <p className="breadcrumb"><Link to="/administracion">Panel </Link>/ Películas</p>
            <h1 className="movie-admin-title">Listado de películas</h1>

            {
                movies.map((movie) => (
                    <MoviesList key={movie._id} onDelete={handleDelete} {...movie} />
                ))
            }

        </div >
    )
}