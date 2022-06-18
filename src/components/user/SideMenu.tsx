import { useMember } from '@/hooks/useMember.hook'
import { NavigationContext } from '@react-navigation/native'
import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

type Props = {
  handleClosed: (e?: boolean) => void
}

export const SideMenu = ({ handleClosed }: Props) => {
  const navigator = React.useContext(NavigationContext)
  const { memberInfo } = useMember()
  return (
    <SafeContainer>
      <Container>
        <Text>유저명 : {memberInfo.nickName}</Text>
        <Text>이메일 : {memberInfo.email}</Text>

        <OrderListButtonWrapper
          onPress={() => navigator?.navigate('UserOrderCheckList')}
        >
          <Text>주문 확인</Text>
        </OrderListButtonWrapper>

        <SettingButtonWrapper
          onPress={() => navigator?.navigate('UserSetting')}
        >
          <Text>설정</Text>
        </SettingButtonWrapper>
        <MenuClosedButton onPress={() => handleClosed(false)}>
          <Text>닫아라</Text>
        </MenuClosedButton>
      </Container>
    </SafeContainer>
  )
}

const SafeContainer = styled.SafeAreaView`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.View`
  position: relative;
  width: 90%;
  height: 100%;
  margin-top: 40px;
`
const MenuClosedButton = styled.TouchableOpacity`
  border: 1px solid black;
  padding: 10px;
  position: absolute;
  right: 0;
`
const OrderListButtonWrapper = styled.TouchableOpacity`
  border: 1px solid black;
  padding: 10px;
  position: absolute;
  bottom: 20%;
  left: 0;
`

const SettingButtonWrapper = styled.TouchableOpacity`
  border: 1px solid black;
  padding: 10px;
  position: absolute;
  bottom: 10%;
  left: 0;
`
