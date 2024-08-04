import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useGetSelectedItemsByIdQuery } from '../../features/characters/charactersApiSlice'
import { clearSelection } from '../../features/selected-items/selectedItemsSlice'
import { DataResults } from '../../types'
import classes from './DownloadSelected.module.css'

export const DownloadSelected = () => {
  const dispatch = useAppDispatch()
  const selectedItems = useAppSelector((store) => store.selectedItems)

  const { data, isLoading, isError, isSuccess } =
    useGetSelectedItemsByIdQuery(selectedItems)

  if (isError) {
    throw new Error('Download data error')
  }

  const dateTimeForFileName = (): string => {
    const date = new Date()

    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    const currentDate = `${day}_${month}_${year}_${hours}_${minutes}_${seconds}`

    return currentDate
  }

  const downloadCSV = (selectedItemsResult: DataResults[] | DataResults) => {
    const csvRows = []
    const headers = ['Name', 'Status', 'Species', 'Type', 'Gender', 'Location']

    csvRows.push(headers.join(','))

    const selectedItemsResultArr = Array.isArray(selectedItemsResult)
      ? selectedItemsResult
      : [selectedItemsResult]

    selectedItemsResultArr?.forEach((character) => {
      const row = [
        character.name,
        character.status,
        character.species,
        character.type,
        character.gender,
        character.location.name,
      ]

      csvRows.push(row.join(','))
    })

    const csvString = csvRows.join('\n')
    const blob = new Blob([csvString], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = `${selectedItems.length}_characters_${dateTimeForFileName()}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.text}>
        {selectedItems.length}{' '}
        {selectedItems.length > 1 ? 'items are selected' : 'item selected'}
      </h2>
      <div className={classes.buttons}>
        <button
          className={classes.unselectBtn}
          onClick={() => dispatch(clearSelection())}
        >
          Unselect all
        </button>
        <button
          className={classes.downloadBtn}
          onClick={() => (isSuccess ? downloadCSV(data) : null)}
          disabled={isLoading}
        >
          Download
        </button>
      </div>
    </div>
  )
}
