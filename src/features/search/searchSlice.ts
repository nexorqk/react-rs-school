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
      state.value = action.payload.name
    },
  },
})

export const { setSearch } = searchSlice.actions
