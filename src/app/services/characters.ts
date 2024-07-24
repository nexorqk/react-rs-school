import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API } from '../../constants'
import { DataResults, DataType } from '../../types'

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: API.characters }),
  endpoints: (build) => ({
    getCharactersByName: build.query<DataType, string>({
      query: (name) => `/?name=${name}`,
    }),
    getCharacterById: build.query<DataResults, string>({
      query: (id) => `/${id}`,
    }),
  }),
})
