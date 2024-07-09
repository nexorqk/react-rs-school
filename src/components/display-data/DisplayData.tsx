import clsx from 'clsx'
import { useState } from 'react'
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
  const [isCustomError, setIsCustomError] = useState(false)

  if (!data) {
    throw new Error('Error Display Data')
  }

  if (isCustomError) {
    throw new Error('Clicked Error Button')
  }

  return (
    <>
      <button
        className={classes.errorButton}
        onClick={() => setIsCustomError(true)}
      >
        Make Error
      </button>
      <div className={clsx(classes.bottom, 'container')}>
        {isLoading && <Loader />}
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
    </>
  )
}
