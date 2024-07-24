import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Item {
  id: string
}

export interface SelectedItemsState extends Array<Item> {}

const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState: [] as SelectedItemsState,
  reducers: {
    toggleItem: (state, action: PayloadAction<Item>) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload.id)
      if (itemIndex === -1) {
        state.push(action.payload)
      } else {
        state.splice(itemIndex, 1)
      }
    },
  },
})

export const { toggleItem } = selectedItemsSlice.actions
export const selectedItemsReducer = selectedItemsSlice.reducer
