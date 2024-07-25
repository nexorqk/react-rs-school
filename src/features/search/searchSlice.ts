import { createSlice } from '@reduxjs/toolkit'

export interface SearchState {
  value: string
}

const initialState: SearchState = {
  value: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setSearch } = searchSlice.actions
export const searchReducer = searchSlice.reducer
