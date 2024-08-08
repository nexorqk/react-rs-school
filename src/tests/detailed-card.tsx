import { vi } from 'vitest'

vi.mock('next/router', () => vi.importActual('next-router-mock'))

// const mockData = {
//   created: '-',
//   episode: ['1'],
//   gender: 'Male',
//   image: 'Img',
//   location: { name: 'Belarus', url: 'blr' },
//   origin: { name: 'Earth', url: 'http' },
//   species: 'Human',
//   status: 'Alive',
//   type: '',
//   url: 'https://rickandmortyapi.com/api/character/1',
//   id: 1,
//   name: 'Rick Sanchez',
// }

// describe('Detailed Card', () => {})
