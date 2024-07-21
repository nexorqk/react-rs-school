import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import DisplayData from '../src/components/display-data/DisplayData'
import { DataResults } from '../src/types'

describe('Card List', () => {
  it('Component renders specified number of cards', () => {
    const arr = new Array(20).fill({
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
    const resultData: DataResults[] = arr.map((item, index) => ({
      ...item,
      id: index + 1,
    }))
    const mockData = {
      info: {
        count: 1,
        next: 'link',
        pages: 1,
        prev: null,
      },
      results: resultData,
    }

    render(<DisplayData data={mockData} isLoading={false} />)

    const cards = screen.getAllByRole('list')
    expect(cards.length).toBe(20)
  }),
    it('Components should render "No Data" text message on empty cards array', () => {
      render(<DisplayData data={undefined} isLoading={false} />)

      const text = screen.getByText('No Data')
      expect(text).toBeInTheDocument()
    })
})
