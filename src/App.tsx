import { ChangeEvent, Component, ReactNode } from 'react'
import './App.css'
import Search from './Search'
import {
  BASE_URL_CHARACTER,
  DataResults,
  searchKey,
  searchStorage,
} from './constants'

type StateType = {
  searchValue: string
  data: DataResults[] | undefined
}

export default class App extends Component {
  state: StateType = {
    searchValue: searchStorage,
    data: [],
  }

  handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem(searchKey, e.target.value)

    this.setState({
      searchValue: e.target.value,
    })
  }

  fetchData = async () => {
    try {
      const response = await fetch(
        `${BASE_URL_CHARACTER}/?name=${this.state.searchValue}`
      )
      const data = await response.json()
      console.log(data)
      const firstTenResults: DataResults =
        data?.results && data?.results.length > 10
          ? data?.results.slice(10)
          : data?.results
      this.setState({
        data: firstTenResults,
      })
    } catch (error) {
      console.error(error)
    }
  }

  componentDidMount(): void {
    this.fetchData()
  }

  handleSearchClick = () => {
    this.fetchData()
  }

  render(): ReactNode {
    console.log(this.state.data)

    return (
      <>
        <div className="top container">
          <h1>Rick And Morty Characters</h1>
          <Search
            value={this.state.searchValue}
            onChange={this.handleChangeSearch}
            handleSearchClick={this.handleSearchClick}
          />
        </div>
        <div className="bottom container">
          {!this.state.data ? (
            <h2>No Items</h2>
          ) : (
            this.state.data?.map((character) => (
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
            ))
          )}
        </div>
      </>
    )
  }
}
