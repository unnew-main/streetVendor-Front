import { GoogleLogoutbutton, SignoutButton } from '@/components/auth'
import { ChangeBossButton } from '@/components/common'
import { NavigationContext } from '@react-navigation/native'
import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

export const UserSettingSceen = () => {
  const navigator = React.useContext(NavigationContext)

  return (
    <Container>
      <Text>설정화면</Text>

      <BackButtonWrapper onPress={() => navigator?.goBack()}>
        <Text>뒤로가기</Text>
      </BackButtonWrapper>
      <ChangeBossButtonWrapper>
        <ChangeBossButton />
      </ChangeBossButtonWrapper>
      <GoogleLogoutbutton />
      <SignoutButton />
    </Container>
  )
}

const Container = styled.SafeAreaView`
  background-color: white;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BackButtonWrapper = styled.TouchableOpacity`
  border: 1px solid black;
  padding: 10px;
  background-color: white;
`
const ChangeBossButtonWrapper = styled.View``
