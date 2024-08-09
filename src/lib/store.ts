import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { charactersApiSlice } from './features/characters/charactersApiSlice'
import { searchSlice } from './features/search/searchSlice'
import { selectedItemsSlice } from './features/selected-items/selectedItemsSlice'

const rootReducer = combineSlices(
  searchSlice,
  charactersApiSlice,
  selectedItemsSlice
)

export const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(charactersApiSlice.middleware)
    },
  })
  setupListeners(store.dispatch)
  return store
}

export const store = makeStore()

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
