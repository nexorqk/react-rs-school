import clsx from 'clsx'
import { createContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useAppDispatch } from '../../app/hooks'
import Search from '../../components/search/Search'
import { setSearch } from '../../features/search/searchSlice'
import classes from './AppLayout.module.css'

export const ThemeContext = createContext('light')

export const AppLayout = () => {
    const dispatch = useAppDispatch()
    const [theme, setTheme] = useState('light')
    const [searchValue, setSearchValue] = useState(
        localStorage.getItem('searchQuery') || ''
    )

    useEffect(() => {
        dispatch(setSearch(searchValue))
    }, [dispatch, searchValue])

    return (
        <ThemeContext.Provider value={theme}>
            <div
                className={clsx(
                    classes.wrapper,
                    theme === 'dark' && classes.dark
                )}
            >
                <div className={classes.top}>
                    <h1 className={classes.title}>Rick And Morty Characters</h1>
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
