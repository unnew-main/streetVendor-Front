import { launchCamera } from 'react-native-image-picker'

export const openCamera = async () => {
  return await launchCamera(
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
