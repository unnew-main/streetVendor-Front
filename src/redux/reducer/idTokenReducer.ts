import { setIdTokenStorage } from '@/util/tokenHelper'
import { GoogleSignin } from '@react-native-community/google-signin'
import { createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'

type initalStateType = {
  id: string
}
const initalState = {
  id: '',
}
const idTokenSlice = createSlice({
  name: 'idToken',
  initialState: 0,
  reducers: {
    addIdToken: state => {
      ;(async () => {
        try {
          await GoogleSignin.hasPlayServices()
          const { idToken } = await GoogleSignin.signIn()
          setIdTokenStorage(idToken)
          await AsyncStorage.setItem('root', JSON.stringify(idToken))
          console.log('저장온,', state)
          return state + 1
        } catch (e) {
          console.log('errer', e)
        }
      })()
    },
  },
})

export const { addIdToken } = idTokenSlice.actions
export const selectSetting = (state: any) => state
export default idTokenSlice.reducer
