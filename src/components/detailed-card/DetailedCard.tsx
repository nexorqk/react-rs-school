import { useEffect, useState } from 'react'
import { BASE_URL_CHARACTER } from '../../constants'
import { DataResults } from '../../types'
import Loader from '../loader/Loader'
import classes from './DetailedCard.module.css'

export default function DetailedCard({
  detailedId,
}: {
  detailedId: number | null
}) {
  const [data, setData] = useState<DataResults | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const fetchData = async (id: number) => {
    try {
      setIsLoading(true)
      setData(null)
      const response = await fetch(`${BASE_URL_CHARACTER}/${id}`)
      const data = await response.json()
      setData(data)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (detailedId) {
      fetchData(detailedId)
    }
  }, [detailedId])

  console.log(data)

  return (
    <div className={classes.wrapper}>
      {isLoading && <Loader />}
      {data && (
        <ul className={classes.card}>
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
                {index + 1 !== data.episode.length ? ',' : ''}{' '}
              </span>
            ))}
          </li>
        </ul>
      )}
    </div>
  )
}
