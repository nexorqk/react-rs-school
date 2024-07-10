import clsx from 'clsx'
import Loader from '../loader/Loader'
import type { DataResults } from '../../types'
import classes from './DisplayData.module.css'

export default function DisplayData({
  data,
  isLoading,
}: {
  data: DataResults[] | undefined
  isLoading: boolean
}) {
  if (!data) {
    throw new Error('Error Display Data')
  }

  return (
    <div className={clsx(classes.bottom, 'container')}>
      <div className={classes.loaderWrapper}>{isLoading && <Loader />}</div>
      {data?.map((character) => (
        <ul key={character.id} className={classes.card}>
          <li>{character.name}</li>
          <li>{character.gender} - Gender</li>
          <li>{character.status} - Is Alive</li>
          <li>{character.location.name} - Location</li>
          <li>
            <img src={character.image} alt={character.name} />
          </li>
        </ul>
      ))}
    </div>
  )
}
