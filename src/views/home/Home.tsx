import { useContext } from 'react'
import DisplayData from '../../components/display-data/DisplayData'
// import Pagination from '../../components/pagination/Pagination'
import classes from './Home.module.css'
import { ThemeContext } from '../../components/app-layout/AppLayout'

export default function Home() {
  const theme = useContext(ThemeContext)
  console.log(theme)
  return (
    <div className={classes.wrapper}>
      <DisplayData />
      {/* {!isLoading && !!data && <Pagination pages={data?.info.pages} />} */}
    </div>
  )
}
