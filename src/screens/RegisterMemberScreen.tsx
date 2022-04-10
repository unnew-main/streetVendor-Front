import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

export function RegisterMemberScreen({ userName, setUserName }) {
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
    </View>
  )
}
