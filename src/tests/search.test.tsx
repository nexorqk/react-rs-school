import { render, screen } from '@testing-library/react'
import Search from '../features/search/Search'
// import ErrorBoundary from '../src/components/error-boundary/ErrrorBoundary'
import { describe, expect, it } from 'vitest'
import '@testing-library/jest-dom/vitest'

describe('Search component', () => {
  it('Should be search input here', () => {
    render(<Search value="John" handleSearchInput={() => 'Jo'} />)

    expect(screen.getByLabelText('search-input'))
  })

  // it('Should be make error button', () => {
  //   const spy = vi.spyOn(console, 'error')
  //   spy.mockImplementation(() => {
  //     console.log('mockImplementation')
  //   })

  //   render(
  //     <ErrorBoundary>
  //       <Search value="s" handleSearchInput={() => 'd'} />
  //     </ErrorBoundary>
  //   )
  //   const errorButton = screen.getByRole('button')

  //   fireEvent.click(errorButton)

  //   expect(screen.getByText('Error: Clicked Error Button')).toBeInTheDocument()

  //   spy.mockRestore()
  // })
})
