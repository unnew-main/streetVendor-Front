import AsyncStorage from '@react-native-async-storage/async-storage'

export const setIdTokenStorage = async (value: any) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('IdToken', jsonValue)
  } catch (e) {
    console.log('error', e)
  }
}

export const getIdTokenStorage = async () => {
  try {
    return await AsyncStorage.getItem('IdToken').then(data => {
      return data
    })
    // const jsonValue = await AsyncStorage.getItem('IdToken')
    // return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (e) {
    // error reading value
  }
}
