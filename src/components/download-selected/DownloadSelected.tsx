import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { clearSelection } from '../../features/selected-items/selectedItemsSlice'
import classes from './DownloadSelected.module.css'

export const DownloadSelected = () => {
    const dispatch = useAppDispatch()
    const selectedItems = useAppSelector((store) => store.selectedItems)

    return (
        <div className={classes.wrapper}>
            <h2>
                {selectedItems.length}{' '}
                {selectedItems.length > 1
                    ? 'items are selected'
                    : 'item selected'}
            </h2>
            <div className={classes.buttons}>
                <button onClick={() => dispatch(clearSelection())}>
                    Unselect all
                </button>
                <button>Download</button>
            </div>
        </div>
    )
}
