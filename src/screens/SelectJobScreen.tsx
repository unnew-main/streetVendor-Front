import { GoogleLogoutbutton, SignoutButton } from '@/components/auth'
import React from 'react'
import { Image, Text, View } from 'react-native'
import styled from 'styled-components/native'

type SelectJobScreenType = {
  handlePressUser: () => void
  handlePressBoss: () => void
}
export const SelectJobScreen = ({
  handlePressUser,
  handlePressBoss,
}: SelectJobScreenType) => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Image
        source={require('@/Assets/Images/TOM.png')}
        style={{ width: 100, height: 100 }}
      />
      <Text>직업선택</Text>
      <ButtonWrapper onPress={handlePressUser}>
        <Text>손님으로 입장</Text>
      </ButtonWrapper>
      <ButtonWrapper onPress={handlePressBoss}>
        <Text>사장님으로 입장</Text>
      </ButtonWrapper>
      <GoogleLogoutbutton />
      <SignoutButton />
    </View>
  )
}

const ButtonWrapper = styled.TouchableOpacity`
  border: 1px solid #000000;
  padding: 10px;
  border-radius: 10px;
  background-color: #ffffff;
  margin-bottom: 20px;
  margin-top: 20px;
`
