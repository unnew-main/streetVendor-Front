import { Platform } from 'react-native'
export const getDeepLink = (path = '') => {
  const scheme =
    'com.googleusercontent.apps.326087640855-s92ch02gobaca9f3ufo8hlv9refadknd'
  const prefix =
    Platform.OS === 'android' ? `${scheme}://my-host/` : `${scheme}://`
  return prefix + path
}
