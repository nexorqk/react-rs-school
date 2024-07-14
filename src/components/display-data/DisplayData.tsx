import { useState } from 'react'
import type { DataResults } from '../../types'
import Card from '../card/Card'
import Loader from '../loader/Loader'
import classes from './DisplayData.module.css'
import DetailedCard from '../detailed-card/DetailedCard'

export default function DisplayData({
  data,
  isLoading,
}: {
  data: DataResults[]
  isLoading: boolean
}) {
  const [detailedId, setDetailId] = useState<number | null>(null)

  const handleCardClick = (id: number) => {
    setDetailId(id)
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.cardList}>
        <div className={classes.loaderWrapper}>{isLoading && <Loader />}</div>
        {data?.length > 0 ? (
          data?.map((character) => (
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
      <DetailedCard detailedId={detailedId} />
    </div>
  )
}
