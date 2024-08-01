import { DisplayData } from '../../features/characters/DisplayData'
import { Pagination } from '../../components/pagination/Pagination'
import classes from './Home.module.css'

export const Home = () => {
    return (
        <div className={classes.wrapper}>
            <DisplayData />
            <Pagination />
        </div>
    )
}
