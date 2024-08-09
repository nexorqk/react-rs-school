'use client'
import { toggleItem } from '@/lib/features/selected-items/selectedItemsSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { DataResults } from '@/types'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import classes from './Card.module.css'

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

  const isChecked = selectedItems.includes(character.id)

  const handleCheckboxChange = () => {
    dispatch(toggleItem(character.id))
  }

  return (
    <div className={classes.card}>
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
