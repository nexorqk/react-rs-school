import { useAppSelector } from '../../app/hooks'
import { useGetCharactersByNameQuery } from '../../features/characters/charactersApiSlice'
import classes from './Pagination.module.css'

export const Pagination = () => {
    const searchState = useAppSelector((state) => state.search)

    const { data } = useGetCharactersByNameQuery({
        name: searchState.value,
        page: 1,
    })

    const pagesArr = new Array(data?.info.pages)
        .fill(1)
        .map((item, index) => item + index)

    return (
        <div className={classes.wrapper}>
            {pagesArr.map((pageNum) => (
                <div
                    key={pageNum}
                    onClick={() => console.log(pageNum, 'page')}
                    className={classes.searchItem}
                >
                    {pageNum}
                </div>
            ))}
        </div>
    )
}
