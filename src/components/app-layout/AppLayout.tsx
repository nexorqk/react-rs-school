'use client'
import Search from '@/lib/features/search/Search'
import { setSearch } from '@/lib/features/search/searchSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import Link from 'next/link'
import { createContext, ReactNode, useEffect, useState } from 'react'
import classes from './AppLayout.module.css'

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

  const handleSearchInput = (searchValue: string) => {
    setSearchValue(searchValue)
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div
        className={[classes.wrapper, theme === 'dark' && classes.dark].join(
          ' '
        )}
      >
        <div className={classes.top}>
          <h1 className={classes.title}>
            <Link href="/">Rick And Morty Characters</Link>
          </h1>
          <Search value={searchValue} handleSearchInput={handleSearchInput} />

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
