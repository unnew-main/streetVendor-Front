import { SetPictureScreen } from '@/screens/boss/registerStore'
import { StackRegisterStoreList } from '@/screens/boss/RegisterStoreScreen.type'
import { goAlert } from '@/utils/goAlert'
import { openCamera } from '@/utils/openCamera'
import { openImage } from '@/utils/openImage'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback } from 'react'

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
  const handleOpenImage = useCallback(async () => {
    try {
      const imageUrl = await openImage()
      imageUrl && handlePictureUrl(imageUrl)
    } catch (e) {
      console.log('Error Open Image', e)
    }
  }, [handlePictureUrl])

  const handleOpenCamera = useCallback(async () => {
    console.log('Camera Click!')
    try {
      const imageUrl = await openCamera()
      imageUrl && handlePictureUrl(imageUrl)
    } catch (e) {
      console.log('Error Open Image', e)
    }
  }, [handlePictureUrl])

  const handleNextRouter = useCallback(() => {
    if (pictureUrl === '') {
      goAlert('가게 사진을 선택해주세요')
    } else {
      navigate('Outtro')
    }
  }, [navigate, pictureUrl])

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
