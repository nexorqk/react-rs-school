import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Search from '../src/components/search/Search'
import ErrorBoundary from '../src/components/error-boundary/ErrrorBoundary'

describe('Search component', () => {
  it('Should be search input here', () => {
    render(<Search value="John" setSearchValue={() => 'Jo'} />)

    expect(screen.getByLabelText('search-input'))
  })

  it('Should be make error button', () => {
    render(
      <ErrorBoundary>
        <Search value="s" setSearchValue={() => 'd'} />
      </ErrorBoundary>
    )

    const errorButton = screen.getByRole('button')

    fireEvent.click(errorButton)

    expect(screen.getByText('Error: Clicked Error Button')).toBeInTheDocument()
  })
})
