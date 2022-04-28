import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native'
import { RegisterStoreLayout } from './RegisterStoreLayout'

type Props = {
  handleNextRouter: () => void
  pictureUrl: string
  handlePictureUrl: (data: string) => void
  handleOpenImage: () => void
  handleOpenCamera: () => void
}

export const SetPictureScreen = ({
  handleNextRouter,
  handleOpenImage,
  handleOpenCamera,
  pictureUrl,
}: Props) => {
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
