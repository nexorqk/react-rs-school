export const API = {
  characters: 'https://rickandmortyapi.com/api/character',
  locations: 'https://rickandmortyapi.com/api/location',
  episodes: 'https://rickandmortyapi.com/api/episode',
}

export const BASE_URL_CHARACTER = API.characters

const searchKey = 'searchInput'
export const getLSSearch = localStorage.getItem(searchKey)
export const setLSSearch = (searchValue: string) =>
  localStorage.setItem(searchKey, searchValue)
