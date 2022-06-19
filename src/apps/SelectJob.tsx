import React, { useCallback } from 'react'

import { NavigationContext } from '@react-navigation/native'
import { useMember } from '@/hooks/useMember.hook'
import styled from 'styled-components/native'
import { Image, Text, View } from 'react-native'
import { GoogleLogoutbutton, SignoutButton } from '@/components/auth'

export const SelectJob = () => {
  const navigator = React.useContext(NavigationContext)
  const { memberInfo } = useMember()

  const handlePressUser = useCallback(() => {
    navigator?.reset({ routes: [{ name: 'UserStack' }] })
  }, [navigator])
  const handlePressBoss = useCallback(() => {
    navigator?.reset({ routes: [{ name: 'BossStack' }] })
  }, [navigator])
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

      <Text>{memberInfo.nickName}</Text>
      <Text>{memberInfo.email}</Text>
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
