import { FormEvent, useState } from 'react'
import classes from './Search.module.css'

type PropsType = {
  value: string
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  handleSearchSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export default function Search({
  value,
  setSearchValue,
  handleSearchSubmit,
}: PropsType) {
  const [isCustomError, setIsCustomError] = useState(false)

  if (isCustomError) {
    throw new Error('Clicked Error Button')
  }

  return (
    <form onSubmit={handleSearchSubmit} className={classes.container}>
      <input
        id="search-by-name"
        className={classes.search}
        type="search"
        value={value}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit" className={classes.searchButton}>
        Search
      </button>
      <button
        className={classes.errorButton}
        onClick={() => setIsCustomError(true)}
      >
        Make Error
      </button>
    </form>
  )
}
