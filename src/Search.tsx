import { ChangeEvent, Component, ReactNode } from 'react'

type Props = {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleSearchClick: () => void
}

export default class Search extends Component<Props> {
  render(): ReactNode {
    return (
      <div>
        <input
          className="search"
          type="search"
          value={this.props.value}
          onChange={this.props.onChange}
        />
        <button className="searchButton" onClick={this.props.handleSearchClick}>
          Search
        </button>
      </div>
    )
  }
}
