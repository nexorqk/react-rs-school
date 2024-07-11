import clsx from 'clsx'
import { FormEvent, useEffect, useState } from 'react'
import classes from './App.module.css'
import DisplayData from './components/display-data/DisplayData'
import Search from './components/search/Search'
import useSearchQuery from './hooks/useSearchQuery'
import { DataResults } from './types'
import { getFetchUrl } from './constants'

export default function App() {
  const { lsSearch, setLSSearch } = useSearchQuery()
  const [searchValue, setSearchValue] = useState(lsSearch)
  const [data, setData] = useState<DataResults[] | undefined>([])
  const [isLoading, setIsLoading] = useState(false)

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
      if (firstTenResults) {
        setLSSearch(searchValue)
      }
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData(searchValue)
  }, [])

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetchData(searchValue)
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
