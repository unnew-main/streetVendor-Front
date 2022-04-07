import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistStore, persistReducer } from 'redux-persist'
import idTokenReducer from './reducer/idTokenReducer'
// import { getDefaultMiddleware } from '@reduxjs/toolkit'
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}
const rootReducer = combineReducers({
  // diaryReducer,
  idTokenReducer,
})

export const store = configureStore({
  reducer: persistReducer(persistConfig, idTokenReducer),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export const persistor = persistStore(store)
