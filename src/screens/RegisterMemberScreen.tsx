import { GoogleLogoutbutton } from '@/components/auth'
import { CustomTextInput } from '@/components/common'
import React from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

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
        <CustomTextInput
          onChangeText={setUserName}
          value={userName}
          placeholder="닉네임을 입력해주세요."
        />
        <TouchableOpacity onPress={handleRegister}>
          <Text>등록하기</Text>
        </TouchableOpacity>
        <GoogleLogoutbutton />
      </View>
    </KeyboardAvoidingView>
  )
}
