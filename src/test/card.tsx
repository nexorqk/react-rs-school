import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { Card } from '../components/card/Card'

it('Card component renders the relevant card data', () => {
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

    render(<Card character={mockData} />)

    const name = screen.getByRole('heading')
    expect(name).toHaveTextContent('Rick Sanchez')

    const gender = screen.getByText('Male - Gender')
    expect(gender).toBeInTheDocument()

    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', mockData.image)
    expect(image).toHaveAttribute('alt', mockData.name)
})
