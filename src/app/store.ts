import type { Action, ThunkAction } from '@reduxjs/toolkit'
import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { searchSlice } from '../features/search/searchSlice'
import { charactersApiSlice } from '../features/characters/charactersApiSlice'
import { selectedItemsSlice } from '../features/selected-items/selectedItemsSlice'

const rootReducer = combineSlices(
    searchSlice,
    charactersApiSlice,
    selectedItemsSlice
)

export type RootState = ReturnType<typeof rootReducer>

export const makeStore = (preloadedState?: Partial<RootState>) => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(charactersApiSlice.middleware)
        },
        preloadedState,
    })
    setupListeners(store.dispatch)
    return store
}

export const store = makeStore()

export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ThunkReturnType = void> = ThunkAction<
    ThunkReturnType,
    RootState,
    unknown,
    Action
>
