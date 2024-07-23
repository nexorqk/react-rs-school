import { useState } from 'react'
import { charactersApi } from '../../services/characters'
import Card from '../card/Card'
import DetailedCard from '../detailed-card/DetailedCard'
import Loader from '../loader/Loader'
import classes from './DisplayData.module.css'

export default function DisplayData() {
  const { data, error, isLoading, isFetching, refetch } =
    charactersApi.useGetCharacterByNameQuery('')

  const [detailedId, setDetailId] = useState<number | null>(null)

  const handleCardClick = (id: number) => {
    setDetailId(id)
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.cardList}>
        <div className={classes.loaderWrapper}>{isLoading && <Loader />}</div>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data?.results && data.results.length > 0 ? (
          data.results.map((character) => (
            <Card
              key={character.id}
              handleCardClick={handleCardClick}
              character={character}
            />
          ))
        ) : (
          <h1>No Data</h1>
        )}
      </div>
      <button onClick={refetch} disabled={isFetching}>
        {isFetching ? 'Fetching...' : 'Refetch'}
      </button>
      <DetailedCard detailedId={detailedId} />
    </div>
  )
}
