import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
  Item,
  toggleItem,
} from '../../features/selected-items/selectedItemsSlice'
import { DataResults } from '../../types'
import classes from './Card.module.css'

export default function Card({
  character,
  handleCardClick,
}: {
  character: DataResults
  handleCardClick: (id: string) => void
}) {
  const dispatch = useAppDispatch()
  const selectedItems = useAppSelector((state) => state.selectedItem)

  const handleCheckboxChange = (item: Item) => {
    dispatch(toggleItem(item))
  }

  return (
    <ul
      key={character.id}
      className={classes.card}
      onClick={() => handleCardClick(`${character.id}`)}
    >
      <li>
        <h3 className={classes.name}>{character.name}</h3>
      </li>
      <li>{character.gender} - Gender</li>
      <li className={classes.imageItem}>
        <img
          className={classes.image}
          src={character.image}
          alt={character.name}
        />
      </li>
      {/* <li>
        <input
          type="checkbox"
          checked={selectedItems.some(
            (selectedItem) => selectedItem.id === character.id
          )}
          onChange={() => handleCheckboxChange(character)}
        />
      </li> */}
    </ul>
  )
}
