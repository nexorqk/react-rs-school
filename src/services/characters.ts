import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API } from '../constants'
import { DataType } from '../types'

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: API.characters }),
  endpoints: (builder) => ({
    getCharacterByName: builder.query<DataType, string>({
      query: (name) => `${API.characters}/?name=${name}`,
    }),
  }),
})
