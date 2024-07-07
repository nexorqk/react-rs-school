import { Component, ReactNode } from 'react'
import type { DataResults } from './types'
import Loader from './Loader'

export default class DisplayData extends Component<{
  data: DataResults[] | undefined
  isLoading: boolean
}> {
  state = {
    isCustomError: false,
  }

  render(): ReactNode {
    if (!this.props.data) {
      throw new Error('Error Display Data')
    }

    if (this.state.isCustomError) {
      throw new Error('Clicked Error Button')
    }

    return (
      <>
        <button
          className="errorButton"
          onClick={() => this.setState({ isCustomError: true })}
        >
          Make Error
        </button>
        <div className="bottom container">
          {this.props.isLoading && <Loader />}
          {this.props.data?.map((character) => (
            <ul key={character.id} className="card">
              <li className="card-item">{character.name}</li>
              <li className="card-item">{character.gender} - Gender</li>
              <li className="card-item">{character.status} - Is Alive</li>
              <li className="card-item">
                {character.location.name} - Location
              </li>
              <li className="card-item">
                <img src={character.image} alt={character.name} />
              </li>
            </ul>
          ))}
        </div>
      </>
    )
  }
}
