import { useAppSelector } from '../../app/hooks'
import { charactersApi } from '../../app/services/characters'
import classes from './Pagination.module.css'

export default function Pagination() {
  const searchState = useAppSelector((state) => state.search)

  const {} = charactersApi.useGetCharactersByNameQuery(searchState.value)

  // const pagesArr = new Array(pages).fill(1).map((item, index) => item + index)

  return (
    <div className={classes.wrapper}>
      {/* {pagesArr.map((pageNum) => (
        <div
          key={pageNum}
          onClick={() => console.log(pageNum, 'page')}
          className={classes.searchItem}
        >
          {pageNum}
        </div>
      ))} */}
    </div>
  )
}
