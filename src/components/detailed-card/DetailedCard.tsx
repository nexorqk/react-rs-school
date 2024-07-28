import { useSearchParams } from 'react-router-dom'
import { useGetCharacterByIdQuery } from '../../features/characters/charactersApiSlice'
import { Loader } from '../loader/Loader'
import classes from './DetailedCard.module.css'

export const DetailedCard = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const detailId = searchParams.get('details') || '1'
    const { data, error, isLoading } = useGetCharacterByIdQuery(detailId)

    if (error) {
        throw new Error('No Detailed Data')
    }

    return (
        <div className={classes.wrapper}>
            {isLoading && <Loader />}
            {data && (
                <ul className={classes.card}>
                    <li className={classes.close}>
                        <button
                            className={classes.closeButton}
                            onClick={() =>
                                setSearchParams({
                                    page: searchParams.get('page') || '1',
                                })
                            }
                        >
                            Close
                        </button>
                    </li>
                    <li>Close</li>
                    <li>Name - {data.name}</li>
                    <li>Status - {data.status}</li>
                    <li>Species - {data.species}</li>
                    {data.type && <li>The type or subspecies - {data.type}</li>}
                    <li>Gender - {data.gender}</li>
                    <li>Origin location - {data.origin.name}</li>
                    <li>Last known location - {data.location.name}</li>
                    <li>
                        <img src={data.image} alt={data.name} />
                    </li>
                    <li>
                        Episode -{' '}
                        {data.episode.map((episode, index) => (
                            <span key={episode}>
                                {episode.slice(-2).replace('/', '')}
                                {index + 1 !== data.episode.length
                                    ? ','
                                    : ''}{' '}
                            </span>
                        ))}
                    </li>
                </ul>
            )}
            {/* TODO Close button */}
        </div>
    )
}
