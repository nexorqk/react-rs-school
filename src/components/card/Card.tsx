import { DataResults } from '../../types'
import classes from './Card.module.css'

export default function Card({ character }: { character: DataResults }) {
  return (
    <ul key={character.id} className={classes.card}>
      <li>{character.name}</li>
      <li>{character.gender} - Gender</li>
      <li className={classes.imageItem}>
        <img
          className={classes.image}
          src={character.image}
          alt={character.name}
        />
      </li>
    </ul>
  )
}
