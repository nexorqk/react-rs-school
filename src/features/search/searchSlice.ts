import { createSlice } from '@reduxjs/toolkit'

export interface ISearchState {
    value: string
}

const initialState: ISearchState = {
    value: '',
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            localStorage.setItem('searchQuery', action.payload)
            state.value = action.payload
        },
    },
})

export const { setSearch } = searchSlice.actions
export const searchReducer = searchSlice.reducer
