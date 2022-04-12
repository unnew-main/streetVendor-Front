import AsyncStorage from '@react-native-async-storage/async-storage'
import { setting } from '@/constants'

export const sessionHelper = {
  setSession: async (session: string) =>
    await AsyncStorage.setItem(setting.sessionKey.id, session),
  getSession: async () =>
    (await AsyncStorage.getItem(setting.sessionKey.id)) ?? 'null',
}
