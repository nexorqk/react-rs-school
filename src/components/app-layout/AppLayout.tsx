import clsx from 'clsx'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Search from '../../features/search/Search'
import { setSearch } from '../../features/search/searchSlice'
import classes from './AppLayout.module.css'
import Link from 'next/link'

export const ThemeContext = createContext<string | null>(null)

export const AppLayout = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch()
  const searchState = useAppSelector((state) => state.search)
  const [theme, setTheme] = useState('')
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    const currentTheme = window.localStorage.getItem('theme')
    setTheme(currentTheme || 'light')
    const currentSearchItem = localStorage.getItem('searchValue')
    setSearchValue(currentSearchItem || '')
  }, [])

  useEffect(() => {
    dispatch(setSearch({ name: searchValue }))
    localStorage.setItem('searchValue', searchValue)
  }, [dispatch, searchValue, searchState])

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={theme}>
      <div className={clsx(classes.wrapper, theme === 'dark' && classes.dark)}>
        <div className={classes.top}>
          <h1 className={classes.title}>
            <Link href="/">Rick And Morty Characters</Link>
          </h1>
          <Search value={searchValue} setSearchValue={setSearchValue} />

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
        {children}
      </div>
    </ThemeContext.Provider>
  )
}
