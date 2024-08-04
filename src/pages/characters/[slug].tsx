import { useGetCharactersByNameQuery } from '@/features/characters/charactersApiSlice'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { useAppSelector } from '../../app/hooks'
import { Card } from '../../components/card/Card'
import { DetailedCard } from '../../components/detailed-card/DetailedCard'
import { DownloadSelected } from '../../components/download-selected/DownloadSelected'
import { Loader } from '../../components/loader/Loader'
import classes from './DisplayData.module.css'

export default function Page() {
  const searchState = useAppSelector((state) => state.search)
  const selectedItems = useAppSelector((state) => state.selectedItems)
  const searchParams = useSearchParams()
  const router = useRouter()

  const { data, error, isLoading } = useGetCharactersByNameQuery({
    name: searchState.value,
    page:
      //  searchParams.get('page') ||
      '1',
  })

  return (
    <div className={classes.wrapper}>
      <div className={classes.cardList}>
        {selectedItems.length > 0 && <DownloadSelected />}
        <div className={classes.loaderWrapper}>{isLoading && <Loader />}</div>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data?.results && data.results.length > 0 ? (
          data.results.map((character) => (
            <Card key={character.id} character={character} />
          ))
        ) : (
          <h1>No Data</h1>
        )}
        <h2>{router.query.slug}</h2>
      </div>
      {searchParams?.get('details') && <DetailedCard />}
    </div>
  )
}
