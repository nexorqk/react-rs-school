import { DataResults } from '../../types'
import classes from './Card.module.css'

export const Card = ({
  character,
  handleCardClick,
}: {
  character: DataResults
  handleCardClick: (id: string) => void
}) => {
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
    </ul>
  )
}
