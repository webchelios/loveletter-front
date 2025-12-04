import { useEffect, useState } from "react"
import type { Director } from "../../../directors/interfaces/Director.interface"
import { getDirectors } from "../../../directors/actions/get-directors"
import { DirectorsList } from "../components/DirectorsList"

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
        <div>
            <h1>Listado</h1>
            {
                directors.map((director) => (
                    <DirectorsList key={director._id} onDelete={handleDelete} {...director} />
                ))
            }
        </div>
    )
}
