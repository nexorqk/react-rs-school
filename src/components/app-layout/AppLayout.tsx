import clsx from 'clsx'
import { createContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Search from '../../components/search/Search'
import useSearchQuery from '../../hooks/useSearchQuery'
import classes from './AppLayout.module.css'

export const ThemeContext = createContext('light')

export default function AppLayout() {
  const [theme, setTheme] = useState('light')
  const { lsSearch, setLSSearch } = useSearchQuery()
  const [searchValue, setSearchValue] = useState(lsSearch)

  useEffect(() => {
    setLSSearch(searchValue)
  }, [searchValue, setLSSearch])

  return (
    <ThemeContext.Provider value={theme}>
      <div className={clsx(classes.wrapper, theme === 'dark' && classes.dark)}>
        <div className={classes.top}>
          <h1 className={classes.title}>Rick And Morty Characters</h1>
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
        <Outlet />
      </div>
    </ThemeContext.Provider>
  )
}
