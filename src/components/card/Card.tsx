import { useSearchParams } from 'react-router-dom'
import { DataResults } from '../../types'
import classes from './Card.module.css'

export const Card = ({ character }: { character: DataResults }) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const handleURLParams = () => {
        const query = {
            page: searchParams.get('page') || '1',
            details: `${character.id}`,
        }
        setSearchParams(query)
    }

    return (
        <ul
            key={character.id}
            onClick={handleURLParams}
            className={classes.card}
        >
            <li>
                <h3 className={classes.name}>{character.name}</h3>
            </li>
            <li>{character.gender} - Gender</li>
            <li className={classes.imageItem}>
                <img
                    className={classes.image}
                    src={character.image}
                    alt={character.name}
                />
            </li>
        </ul>
    )
}
