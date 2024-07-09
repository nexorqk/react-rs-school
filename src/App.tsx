import clsx from 'clsx'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import classes from './App.module.css'
import DisplayData from './components/display-data/DisplayData'
import Search from './components/search/Search'
import { BASE_URL_CHARACTER, searchKey } from './constants'
import { DataResults } from './types'

export default function App() {
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem(searchKey) ?? ''
  )
  const [data, setData] = useState<DataResults[] | undefined>()
  const [isLoading, setIsLoading] = useState(false)

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`${BASE_URL_CHARACTER}/?name=${searchValue}`)
      const data = await response.json()
      const firstTenResults: DataResults[] =
        data?.results && data?.results.length > 10
          ? data?.results.slice(10)
          : data?.results
      setData(firstTenResults)
      setIsLoading(false)
      if (firstTenResults) {
        localStorage.setItem(searchKey, searchValue)
      }
    } catch (error) {
      console.error(error)
    }
  }, [searchValue])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const handleSearchClick = () => {
    fetchData()
  }

  return (
    <>
      <div className={clsx(classes.top, 'container')}>
        <h1>Rick And Morty Characters</h1>
        <Search
          value={searchValue}
          onChange={handleChangeSearch}
          handleSearchClick={handleSearchClick}
        />
      </div>
      <DisplayData data={data} isLoading={isLoading} />
    </>
  )
}
