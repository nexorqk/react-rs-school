import clsx from 'clsx'
import { createContext, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Search from '../../features/search/Search'
import { setSearch } from '../../features/search/searchSlice'
import classes from './AppLayout.module.css'

export const ThemeContext = createContext('')

export const AppLayout = () => {
    const dispatch = useAppDispatch()
    const searchState = useAppSelector((state) => state.search)
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
    const [searchValue, setSearchValue] = useState(
        localStorage.getItem('searchValue') || ''
    )

    useEffect(() => {
        dispatch(setSearch({ name: searchValue }))
        localStorage.setItem('searchValue', searchValue)
    }, [dispatch, searchValue, searchState])

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={theme}>
            <div
                className={clsx(
                    classes.wrapper,
                    theme === 'dark' && classes.dark
                )}
            >
                <div className={classes.top}>
                    <h1 className={classes.title}>
                        <Link to="/">Rick And Morty Characters</Link>
                    </h1>
                    <Search
                        value={searchValue}
                        setSearchValue={setSearchValue}
                    />

                    <button
                        className={classes.toggleTheme}
                        onClick={() =>
                            setTheme((prevTheme) =>
                                prevTheme === 'light' ? 'dark' : 'light'
                            )
                        }
                    >
                        Toggle Theme
                    </button>
                </div>
                <Outlet />
            </div>
        </ThemeContext.Provider>
    )
}
