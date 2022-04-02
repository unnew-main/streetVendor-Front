import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}
const rootReducer = combineReducers({
  // diaryReducer,
  // settingReducer,
})

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
})
export const persistor = persistStore(store)
