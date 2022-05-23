import { GoogleLogoutbutton } from '@/components/auth'
import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

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
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Text>회원가입페이지</Text>
      <TextInput
        onChangeText={setUserName}
        value={userName}
        placeholder="닉네임을 입력해주세요."
      />
      <TouchableOpacity onPress={handleRegister}>
        <Text>등록하기</Text>
      </TouchableOpacity>
      <GoogleLogoutbutton />
    </View>
  )
}
