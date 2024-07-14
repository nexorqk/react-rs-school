import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import DisplayData from '../../src/components/display-data/DisplayData'

describe('Card List', () => {
  it('Verify that the component renders the specified number of cards', () => {
    const arr = new Array(10).fill({
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
    })
    const mockData = arr.map((item, index) => ({ ...item, id: index + 1 }))

    render(<DisplayData data={mockData} isLoading={false} />)

    const cards = screen.getAllByRole('list')
    expect(cards.length).toBe(10)
  }),
    it('Components should render "No Data" text message on no empty cards array', () => {
      render(<DisplayData data={[]} isLoading={false} />)

      const text = screen.getByText('No Data')
      expect(text).toBeInTheDocument()
    })
})
