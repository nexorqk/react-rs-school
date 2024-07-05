import { Component, ReactNode } from 'react'

export default class Search extends Component {
  render(): ReactNode {
    return (
      <div>
        <input
          className="search"
          type="search"
          placeholder="Type search value"
        />
        <button>Search</button>
      </div>
    )
  }
}
