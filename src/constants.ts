export const API = {
  characters: 'https://rickandmortyapi.com/api/character',
  locations: 'https://rickandmortyapi.com/api/location',
  episodes: 'https://rickandmortyapi.com/api/episode',
}

export const BASE_URL_CHARACTER = API.characters

export const searchKey = 'searchInput'

export const searchStorage = localStorage.getItem(searchKey) ?? ''

export type DataResults = {
  created: string
  episode: string[]
  gender: string
  id: number
  image: string
  location: {
    name: string
    url: string
  }
  name: string
  origin: {
    name: string
    url: string
  }
  species: string
  status: string
  type: string
  url: string
}
