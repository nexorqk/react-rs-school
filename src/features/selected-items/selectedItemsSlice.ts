import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState: [] as number[],
  reducers: {
    toggleItem: (state, action: PayloadAction<number>) => {
      const itemIndex = state.findIndex((item) => item === action.payload)
      if (itemIndex === -1) {
        state.push(action.payload)
      } else {
        state.splice(itemIndex, 1)
      }

      return state
    },
    clearSelection: (state) => {
      state = []

      return state
    },
  },
})

export const { toggleItem, clearSelection } = selectedItemsSlice.actions
