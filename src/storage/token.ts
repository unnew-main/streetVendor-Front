import AsyncStorage from '@react-native-async-storage/async-storage'

export const setIdTokenStorage = async (value: any) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('idToken', jsonValue)
  } catch (e) {
    console.log('idToken set error: ', e)
  }
}

export const getIdTokenStorage = async () => {
  try {
    return await AsyncStorage.getItem('idToken').then(data => data)
    // const jsonValue = await AsyncStorage.getItem('IdToken')
    // return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (e) {
    // error reading value
    console.log('idToken get error: ', e)
  }
}
