'use client'
import { Card } from '@/components/card/Card'
import { DetailedCard } from '@/components/detailed-card/DetailedCard'
import { DownloadSelected } from '@/components/download-selected/DownloadSelected'
import { Loader } from '@/components/loader/Loader'
import { useAppSelector } from '@/lib/hooks'
import { useSearchParams } from 'next/navigation'
import { useGetCharactersByNameQuery } from '../../features/characters/charactersApiSlice'
import classes from './DisplayData.module.css'

export const DisplayData = () => {
  const searchState = useAppSelector((state) => state.search)
  const selectedItems = useAppSelector((state) => state.selectedItems)
  const searchParams = useSearchParams()

  const { data, error, isLoading } = useGetCharactersByNameQuery({
    name: searchState.value,
    page: searchParams.get('page') || '1',
  })

  return (
    <div className={classes.wrapper}>
      <div className={classes.cardList}>
        {selectedItems.length > 0 && <DownloadSelected />}
        <div className={classes.loaderWrapper}>{isLoading && <Loader />}</div>
        {error ? (
          <>Oh no, ther/e was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data?.results && data.results.length > 0 ? (
          data.results.map((character) => (
            <Card key={character.id} character={character} />
          ))
        ) : (
          <h1>No Data</h1>
        )}
        {/* <h2>{router.query.slug}</h2>  - old*/}
        {/* <h2>{searchParams}</h2> */}
      </div>
      {searchParams?.get('details') && <DetailedCard />}
    </div>
  )
}
