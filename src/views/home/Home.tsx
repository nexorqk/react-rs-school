import { FormEvent, useEffect, useState } from 'react'
import DisplayData from '../../components/display-data/DisplayData'
import Pagination from '../../components/pagination/Pagination'
import Search from '../../components/search/Search'
import { getFetchUrl } from '../../constants'
import useSearchQuery from '../../hooks/useSearchQuery'
import { DataResults } from '../../types'
import classes from './Home.module.css'

export default function Home() {
  const { lsSearch, setLSSearch } = useSearchQuery()
  const [searchValue, setSearchValue] = useState(lsSearch)
  const [data, setData] = useState<DataResults[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [pages, setPages] = useState(1)

  const fetchData = async (searchQuery: string) => {
    try {
      setIsLoading(true)
      const response = await fetch(getFetchUrl(searchQuery))
      const data = await response.json()
      const dataResult: DataResults[] = data?.results && data.results
      console.log(data)
      setPages(data.info.pages)
      setData(dataResult)
      if (dataResult) {
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
      <div className={classes.top}>
        <h1 className={classes.title}>Rick And Morty Characters</h1>
        <Search
          value={searchValue}
          setSearchValue={setSearchValue}
          handleSearchSubmit={handleSearchSubmit}
        />
      </div>
      <DisplayData data={data} isLoading={isLoading} />
      {!isLoading && !!data && <Pagination pages={pages} />}
    </>
  )
}
