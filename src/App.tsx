import { Component, ReactNode } from 'react'
import './App.css'
import Search from './Search'

const BASE_URL = 'https://stapi.co/api/v2/rest/book/search'

export default class App extends Component {
  render(): ReactNode {
    return (
      <>
        <div className="top container">
          <Search />
          <h1>Star Trek Books</h1>
        </div>
        <div className="bottom container">Bottom</div>
      </>
    )
  }
}
