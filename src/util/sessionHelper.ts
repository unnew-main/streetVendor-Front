import AsyncStorage from '@react-native-async-storage/async-storage'
import { setting } from '@/constants'

export const sessionHelper = {
  setSession: async (session: string | null) =>
    await AsyncStorage.setItem(
      setting.sessionKey.id,
      JSON.stringify({ session: session }),
    ),
  getSession: async () => {
    const jsonData = await AsyncStorage.getItem(setting.sessionKey.id)
    return jsonData ? JSON.parse(jsonData).session : null
  },
}
