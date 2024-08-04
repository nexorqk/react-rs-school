import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { toggleItem } from '../../features/selected-items/selectedItemsSlice'
import { DataResults } from '../../types'
import classes from './Card.module.css'
import { useSearchParams } from 'next/navigation'

export const Card = ({ character }: { character: DataResults }) => {
  const dispatch = useAppDispatch()
  const selectedItems = useAppSelector((store) => store.selectedItems)
  const searchParams = useSearchParams()
  const router = useRouter()
  const handleURLParams = () => {
    const query = {
      page: searchParams?.get('page') || '1',
      details: `${character.id}`,
    }
    router.push(`?page=${query.page}&details=${query.details}`)
  }
  const route = useRouter()

  const isChecked = selectedItems.includes(character.id)

  const handleCheckboxChange = () => {
    dispatch(toggleItem(character.id))
  }

  return (
    <div key={character.id} className={classes.card}>
      <input
        className={classes.selectCheckbox}
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <ul className={classes.cardList} onClick={handleURLParams}>
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
      </ul>
    </div>
  )
}
