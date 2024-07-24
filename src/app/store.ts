import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { charactersApi } from './services/characters'
import { selectedItemsReducer } from '../features/selected-items/selectedItemsSlice'
import { searchReducer } from '../features/search/searchslice'

const rootReducer = combineReducers({
  [charactersApi.reducerPath]: charactersApi.reducer,
  selectedItem: selectedItemsReducer,
  search: searchReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['search'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(charactersApi.middleware),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
