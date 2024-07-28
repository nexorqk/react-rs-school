import { useSearchParams } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { useGetCharactersByNameQuery } from '../../features/characters/charactersApiSlice'
import { Card } from '../card/Card'
import { DetailedCard } from '../detailed-card/DetailedCard'
import { Loader } from '../loader/Loader'
import classes from './DisplayData.module.css'

export const DisplayData = () => {
    const searchState = useAppSelector((state) => state.search)
    const [searchParams] = useSearchParams()

    const { data, error, isLoading } = useGetCharactersByNameQuery({
        name: searchState.value,
        page: searchParams.get('page') || '1',
    })

    return (
        <div className={classes.wrapper}>
            <div className={classes.cardList}>
                <div className={classes.loaderWrapper}>
                    {isLoading && <Loader />}
                </div>
                {error ? (
                    <>Oh no, there was an error</>
                ) : isLoading ? (
                    <>Loading...</>
                ) : data?.results && data.results.length > 0 ? (
                    data.results.map((character) => (
                        <Card key={character.id} character={character} />
                    ))
                ) : (
                    <h1>No Data</h1>
                )}
            </div>
            {searchParams.get('details') && <DetailedCard />}
        </div>
    )
}
