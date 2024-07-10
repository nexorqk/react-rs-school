import clsx from 'clsx'
import { FormEvent, useCallback, useEffect, useState } from 'react'
import classes from './App.module.css'
import DisplayData from './components/display-data/DisplayData'
import Search from './components/search/Search'
import { BASE_URL_CHARACTER, getLSSearch, setLSSearch } from './constants'
import { DataResults } from './types'

export default function App() {
  const [searchValue, setSearchValue] = useState(getLSSearch || '')
  const [searchQuery, setSearchQuery] = useState(getLSSearch || '')
  const [data, setData] = useState<DataResults[] | undefined>([])
  const [isLoading, setIsLoading] = useState(false)

  const getFetchUrl = useCallback((query: string) => {
    return `${BASE_URL_CHARACTER}/?name=${query}`
  }, [])

  const fetchData = async (searchQuery: string) => {
    try {
      setIsLoading(true)
      const response = await fetch(getFetchUrl(searchQuery))
      const data = await response.json()
      const firstTenResults: DataResults[] =
        data?.results && data.results.length > 10
          ? data.results.slice(0, 10)
          : data.results
      setData(firstTenResults)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    try {
      setLSSearch(searchValue)
      fetchData(searchQuery)
    } catch (error) {
      console.log(error)
    }
  }, [searchQuery])

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchQuery(searchValue)
    fetchData(searchQuery)
  }

  return (
    <>
      <div className={clsx(classes.top, 'container')}>
        <h1>Rick And Morty Characters</h1>
        <Search
          value={searchValue}
          setSearchValue={setSearchValue}
          handleSearchSubmit={handleSearchSubmit}
        />
      </div>
      <DisplayData data={data} isLoading={isLoading} />
    </>
  )
}
