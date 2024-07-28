import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { useGetCharactersByNameQuery } from '../../features/characters/charactersApiSlice'
import classes from './Pagination.module.css'

export const Pagination = () => {
    const searchState = useAppSelector((state) => state.search)
    const [pagesArr, setPagesArr] = useState([1])
    const [searchParams] = useSearchParams()

    const { data } = useGetCharactersByNameQuery({
        name: searchState.value,
        page: searchParams.get('page') || '1',
    })

    useEffect(() => {
        const preparePagesArr = Array.from({
            length: data?.info.pages || 1,
        }).map((_, index) => index + 1)

        setPagesArr(preparePagesArr)
    }, [data])

    return (
        <div className={classes.wrapper}>
            {pagesArr.map((pageNum) => (
                <Link
                    key={pageNum}
                    to={`?page=${pageNum}`}
                    className={clsx(
                        classes.searchItem,
                        +(searchParams.get('page') || '1') === pageNum &&
                            classes.active
                    )}
                >
                    {pageNum}
                </Link>
            ))}
        </div>
    )
}
