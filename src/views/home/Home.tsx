import { useEffect, useState } from 'react'
import DisplayData from '../../components/display-data/DisplayData'
import Pagination from '../../components/pagination/Pagination'
import Search from '../../components/search/Search'
import useSearchQuery from '../../hooks/useSearchQuery'
import { charactersApi } from '../../services/characters'
import classes from './Home.module.css'

export default function Home() {
  const { lsSearch, setLSSearch } = useSearchQuery()
  const [searchValue, setSearchValue] = useState(lsSearch)
  const { data, isLoading } = charactersApi.useGetCharacterByNameQuery(
    searchValue
    // { refetchOnMountOrArgChange: true }
  )

  useEffect(() => {
    setLSSearch(searchValue)
  }, [searchValue, setLSSearch])

  return (
    <>
      <div className={classes.top}>
        <h1 className={classes.title}>Rick And Morty Characters</h1>
        <Search value={searchValue} setSearchValue={setSearchValue} />
      </div>
      <DisplayData data={data} isLoading={isLoading} />
      {!isLoading && !!data && <Pagination pages={data?.info.pages} />}
    </>
  )
}
