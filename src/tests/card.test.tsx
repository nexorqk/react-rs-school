import '@testing-library/jest-dom/vitest'
import { render } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import { Provider } from 'react-redux'
import { describe, expect, it, vi } from 'vitest'
import { store } from '../app/store'
import { Card } from '../components/card/Card'

vi.mock('next/router', () => vi.importActual('next-router-mock'))

const mockData = {
  created: '-',
  episode: ['1'],
  gender: 'Male',
  image: 'Img',
  location: { name: 'Belarus', url: 'blr' },
  origin: { name: 'Earth', url: 'http' },
  species: 'Human',
  status: 'Alive',
  type: '',
  url: 'https://rickandmortyapi.com/api/character/1',
  id: 1,
  name: 'Rick Sanchez',
}

describe('Card', () => {
  it('Card component renders the relevant card data', () => {
    mockRouter.push('/?page=1&details=1')

    const { getByAltText, getByText } = render(
      <Provider store={store}>
        <Card character={mockData} />
      </Provider>
    )

    expect(getByText(mockData.name)).toBeInTheDocument()
    expect(getByText('Male - Gender')).toBeInTheDocument()
    expect(getByAltText(mockData.name)).toHaveAttribute('src', mockData.image)
  })

  // it('checks the checkbox if character is selected', () => {
  //   // const onToggle = vi.fn()
  //   const { getAllByRole } = render(
  //     <Provider store={store}>
  //       <Card character={mockData} />
  //     </Provider>
  //   )

  //   const checkbox = getAllByRole('checkbox')[0]

  //   fireEvent.click(checkbox)
  //   expect(checkbox).toBe('g')
  // })

  // it('handleURLParams should set right url', () => {})

  // it('toggle item if clicking on checkbox', async () => {
  //   const user = userEvent.setup()
  //   render(
  //     <Provider store={store}>
  //       <Card character={mockData} />
  //     </Provider>
  //   )

  //   const checkbox = screen.getAllByRole('checkbox')
  //   await user.click(checkbox[0])
  // })
})
