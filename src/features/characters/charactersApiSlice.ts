import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { DataResults, DataType } from '../../types'

export const charactersApiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://rickandmortyapi.com/api/character',
    }),
    reducerPath: 'charactersApi',
    tagTypes: ['Characters'],
    endpoints: (build) => ({
        getCharactersByName: build.query<
            DataType,
            { name: string; page: string }
        >({
            query: ({ name, page }) => `/?page=${page}&name=${name}`,
        }),
        getCharacterById: build.query<DataResults, string>({
            query: (id) => `/${id}`,
            providesTags: (result, error, id) => [{ type: 'Characters', id }],
        }),
        getSelectedItemsById: build.query<DataResults[], number[]>({
            query: (idArr) => `${idArr.join(',')}`,
        }),
    }),
})

export const {
    useGetCharacterByIdQuery,
    useGetCharactersByNameQuery,
    useGetSelectedItemsByIdQuery,
} = charactersApiSlice
