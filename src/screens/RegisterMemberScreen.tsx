import { GoogleLogoutbutton } from '@/components/auth'
import { CustomTextInput } from '@/components/common'
import React from 'react'
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native'
import styled from 'styled-components/native'

type RegisterMemberType = {
  userName: string
  setUserName: (value: string | ((prevVar: string) => string)) => void
  handleRegister: () => void
}
export function RegisterMemberScreen({
  userName,
  setUserName,
  handleRegister,
}: RegisterMemberType) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Text>회원가입페이지</Text>
        <Text>닉네임을 입력해주세요</Text>
        <CustomTextInput
          onChangeText={setUserName}
          value={userName}
          placeholder="닉네임을 입력해주세요."
        />
        <ButtonWrapper onPress={handleRegister}>
          <Text>등록하기</Text>
        </ButtonWrapper>
        <GoogleLogoutbutton />
      </View>
    </KeyboardAvoidingView>
  )
}

const ButtonWrapper = styled.TouchableOpacity`
  border: 1px solid #000000;
  padding: 10px;
  border-radius: 10px;
  background-color: #ffffff;
`
