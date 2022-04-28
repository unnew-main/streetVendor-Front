import { launchImageLibrary } from 'react-native-image-picker'

export const openImage = async () => {
  return await launchImageLibrary(
    {
      mediaType: 'photo',
    },
    response => {
      if (response.didCancel) {
      } else if (response.errorCode && response.errorMessage) {
        throw Error
      }
    },
  ).then(data => data.assets?.[0].uri)
}
