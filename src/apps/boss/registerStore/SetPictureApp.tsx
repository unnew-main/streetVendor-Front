import { SetPictureScreen } from '@/screens/boss/registerStore'
import { StackRegisterStoreList } from '@/screens/boss/RegisterStoreScreen.type'
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
  const handleNextRouter = useCallback(() => {
    navigate('Outtro')
  }, [navigate])

  return (
    <SetPictureScreen
      handleNextRouter={handleNextRouter}
      pictureUrl={pictureUrl}
      handlePictureUrl={handlePictureUrl}
    />
  )
}
