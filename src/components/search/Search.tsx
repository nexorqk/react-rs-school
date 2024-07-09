import { ChangeEvent } from 'react'
import classes from './Search.module.css'

type PropsType = {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleSearchClick: () => void
}

export default function Search({
  value,
  onChange,
  handleSearchClick,
}: PropsType) {
  return (
    <div>
      <input
        className={classes.search}
        type="search"
        value={value}
        onChange={onChange}
      />
      <button className={classes.searchButton} onClick={handleSearchClick}>
        Search
      </button>
    </div>
  )
}
