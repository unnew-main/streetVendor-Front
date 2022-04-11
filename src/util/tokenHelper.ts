import AsyncStorage from '@react-native-async-storage/async-storage'
import { setting } from '@/constants'

export const tokenHelper = {
  setIdToken: async (token: string) =>
    await AsyncStorage.setItem(setting.tokenKey.id, token),
  getIdToken: async () =>
    (await AsyncStorage.getItem(setting.tokenKey.id)) ?? 'null',
}
