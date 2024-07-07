import { ChangeEvent, Component, ReactNode } from 'react'
import './App.css'
import { BASE_URL_CHARACTER, searchKey } from './constants'
import DisplayData from './DisplayData'
import ErrorBoundary from './ErrrorBoundary'
import Search from './Search'
import { DataResults } from './types'

type StateType = {
  searchValue: string
  data: DataResults[] | undefined
  isLoading: boolean
}

export default class App extends Component {
  state: StateType = {
    searchValue: localStorage.getItem(searchKey) ?? '',
    data: [],
    isLoading: false,
  }

  handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchValue: e.target.value,
    })
  }

  fetchData = async () => {
    try {
      this.setState({
        isLoading: true,
      })
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
      this.setState({
        isLoading: false,
      })
      if (firstTenResults) {
        localStorage.setItem(searchKey, this.state.searchValue)
      }
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
        <ErrorBoundary>
          <DisplayData
            data={this.state.data}
            isLoading={this.state.isLoading}
          />
        </ErrorBoundary>
      </>
    )
  }
}
