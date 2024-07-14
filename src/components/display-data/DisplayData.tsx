import type { DataResults } from '../../types'
import Card from '../card/Card'
import Loader from '../loader/Loader'
import classes from './DisplayData.module.css'

export default function DisplayData({
  data,
  isLoading,
}: {
  data: DataResults[]
  isLoading: boolean
}) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.loaderWrapper}>{isLoading && <Loader />}</div>
      {data?.length > 0 ? (
        data?.map((character) => (
          <Card key={character.id} character={character} />
        ))
      ) : (
        <h1>No Data</h1>
      )}
    </div>
  )
}
