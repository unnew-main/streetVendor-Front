import { GoogleSignin } from '@react-native-community/google-signin'
import { setIdTokenStorage, getIdTokenStorage } from '@/storage/token'

export async function signIn() {
  try {
    await GoogleSignin.hasPlayServices()
    const { idToken } = await GoogleSignin.signIn()

    setIdTokenStorage(idToken)
  } catch (error: any) {}
}

export const signOut = async () => {
  try {
    await GoogleSignin.signOut()
    setIdTokenStorage(null)
  } catch (error) {
    console.error(error)
  }
}

// type userInfoType = {
//   email: string | null
//   familyName: string | null
//   givenName: string | null
//   id: string | null
//   name: string | null
//   photo: string | null
// }
export const getCurrentUser = async () => {
  const currentUser = await GoogleSignin.getCurrentUser()
  const tokendata = await getIdTokenStorage()
  console.log('nowIdToen get', tokendata)
  console.log(currentUser)
}
export const getIdToken = async () => {
  return await getIdTokenStorage()
}
