import { RegisterStoreLayout } from '@/components/boss/registerStore/RegisterStoreLayout'
import { StackRegisterStoreList } from '@/types/route.type'
import { goAlert } from '@/utils/goAlert'
import { openCamera } from '@/utils/openCamera'
import { openImage } from '@/utils/openImage'
import { ReportError } from '@/utils/reportError'
import { NavigationContext } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native'

type Props = {
  navigation: StackNavigationProp<StackRegisterStoreList, 'SetPicture'>
  pictureUrl: string
  handlePictureUrl: (data: string) => void
}

export const SetStorePicture = ({
  navigation: { navigate },
  pictureUrl,
  handlePictureUrl,
}: Props) => {
  const navigator = React.useContext(NavigationContext)

  const handleOpenImage = useCallback(async () => {
    try {
      const imageUrl = await openImage()
      imageUrl && handlePictureUrl(imageUrl)
    } catch (error) {
      console.log('Error Open Image', error)
      if (error instanceof Error) {
        ReportError(error.message, navigator)
      }
    }
  }, [handlePictureUrl, navigator])

  const handleOpenCamera = useCallback(async () => {
    console.log('Camera Click!')
    try {
      const imageUrl = await openCamera()
      imageUrl && handlePictureUrl(imageUrl)
    } catch (error) {
      console.log('Error Open Image', error)
      if (error instanceof Error) {
        ReportError(error.message, navigator)
      }
    }
  }, [handlePictureUrl, navigator])

  const handleNextRouter = useCallback(() => {
    if (pictureUrl === '') {
      goAlert('가게 사진을 선택해주세요')
    } else {
      navigate('Outtro')
    }
  }, [navigate, pictureUrl])

  return (
    <RegisterStoreLayout title="가게사진" handleNextRouter={handleNextRouter}>
      <View>
        <Text>SetPictureScreen</Text>
      </View>
      <TouchableOpacity onPress={handleOpenImage}>
        <Text style={{ color: 'blue' }}>사진가져오기</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleOpenCamera}>
        <Text style={{ color: 'blue' }}>사진 찍기</Text>
      </TouchableOpacity>
      {pictureUrl ? (
        <ImageWrapper
          source={{
            uri: pictureUrl,
          }}
        />
      ) : (
        <View>
          <Text>비어있음</Text>
        </View>
      )}
    </RegisterStoreLayout>
  )
}

const ImageWrapper = styled.Image`
  width: 100px;
  height: 100px;
`
