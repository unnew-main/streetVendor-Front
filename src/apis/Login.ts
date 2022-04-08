import { GoogleSignin } from '@react-native-community/google-signin'
import { setIdTokenStorage, getIdTokenStorage } from '@/storage/token'

export async function signIn() {
  try {
    await GoogleSignin.hasPlayServices()
    const { idToken } = await GoogleSignin.signIn()

    setIdTokenStorage(idToken)
  } catch (error: any) {}
}

export async function signOut() {
  try {
    await GoogleSignin.signOut()
    setIdTokenStorage(null)
  } catch (error) {
    console.error(error)
  }
}

export async function getIdToken() {
  return await getIdTokenStorage()
}
