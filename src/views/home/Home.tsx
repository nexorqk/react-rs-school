import DisplayData from '../../components/display-data/DisplayData'
import Pagination from '../../components/pagination/Pagination'
import classes from './Home.module.css'

export default function Home() {
  return (
    <div className={classes.wrapper}>
      <DisplayData />
      <Pagination />
    </div>
  )
}
