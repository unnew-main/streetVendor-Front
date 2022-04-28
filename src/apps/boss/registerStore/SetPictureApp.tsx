import { SetPictureScreen } from '@/screens/boss/registerStore'
import { StackRegisterStoreList } from '@/screens/boss/RegisterStoreScreen.type'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

type Props = {
  navigation: StackNavigationProp<StackRegisterStoreList, 'SetPicture'>
  pictureUrl: string
  handlePictureUrl: (data: string) => void
}

export const SetPictureApp = ({
  navigation: { navigate },
  pictureUrl,
  handlePictureUrl,
}: Props) => {
  const handleOpenImage = async () => {
    try {
      await launchImageLibrary(
        {
          mediaType: 'photo',
        },
        response => {
          if (response.didCancel) {
          } else if (response.errorCode && response.errorMessage) {
            throw Error
          } else {
            handlePictureUrl(response.assets?.[0].uri)
          }
        },
      )
    } catch (e) {
      console.log('Error Open Image', e)
    }
  }
  const handleOpenCamera = async () => {
    try {
      await launchCamera(
        {
          mediaType: 'photo',
        },
        response => {
          if (response.didCancel) {
          } else if (response.errorCode && response.errorMessage) {
            throw Error
          } else {
            handlePictureUrl(response.assets?.[0].uri)
          }
        },
      )
    } catch (e) {
      console.log('Error Open Image', e)
    }
  }

  const handleNextRouter = useCallback(() => {
    navigate('Outtro')
  }, [navigate])

  return (
    <SetPictureScreen
      handleNextRouter={handleNextRouter}
      pictureUrl={pictureUrl}
      handlePictureUrl={handlePictureUrl}
      handleOpenImage={handleOpenImage}
      handleOpenCamera={handleOpenCamera}
    />
  )
}
