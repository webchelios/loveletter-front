import './DirectorList.css'
import type { Director } from "../interfaces/Director.interface"

interface Props {
    director: Director;
}

export const DirectorList = ({ director }: Props) => {
    return (
        <div className="director-container">
            <h2>{director.name} {director.surname}</h2>
            <p>{director.age} años</p>
        </div>
    )
}
