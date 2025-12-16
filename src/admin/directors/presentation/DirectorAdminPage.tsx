import { useEffect, useState } from "react"
import type { Director } from "../../../directors/interfaces/Director.interface"
import { getDirectors } from "../../../directors/actions/get-directors"
import { DirectorsList } from "../components/DirectorsList"
import './DirectorAdminPage.css'
import { Link } from "react-router"

export const DirectorAdminPage = () => {

    const [directors, setDirectors] = useState<Director[]>([])

    const handleGetMovies = async () => {
        const allDirectors = await getDirectors()
        setDirectors(allDirectors)
    }

    const handleDelete = async (id: string) => {
        setDirectors(prev => prev.filter(director => director._id !== id));
    }

    useEffect(() => {
        handleGetMovies()
    }, [])

    return (
        <div className="director-admin-page">
            <p className="breadcrumb"><Link to="/administracion">Panel </Link>/ Directores</p>
            <h1 className="director-admin-title">Listado de Directores</h1>

            <div className="director-admin-list-wrapper">
                {directors.length === 0 && (
                    <p>No hay directores</p>
                )}
                {directors.map((director) => (
                    <DirectorsList key={director._id} onDelete={handleDelete} {...director} />
                ))}
            </div>

        </div>
    )
}