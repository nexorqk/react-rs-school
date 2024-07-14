export const API = {
  characters: 'https://rickandmortyapi.com/api/character',
  locations: 'https://rickandmortyapi.com/api/location',
  episodes: 'https://rickandmortyapi.com/api/episode',
}

export const BASE_URL_CHARACTER = API.characters

export const getFetchUrl = (query: string) => {
  return `${BASE_URL_CHARACTER}/?name=${query}`
}
