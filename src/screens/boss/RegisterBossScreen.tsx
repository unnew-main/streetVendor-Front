import React, { Dispatch, SetStateAction } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

type Props = {
  handleSetBoss: () => void
  name: string
  phone: string
  setName: Dispatch<SetStateAction<string>>
  setPhone: Dispatch<SetStateAction<string>>
}
export const RegisterBossScreen = ({
  handleSetBoss,
  name,
  phone,
  setName,
  setPhone,
}: Props) => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Text>사장님 이름입력 </Text>
      <TextInput onChangeText={setName} value={name} placeholder="홍길동" />
      <Text>전화번호 입력 </Text>
      <TextInput
        onChangeText={setPhone}
        value={phone}
        placeholder="01012345678"
      />
      <TouchableOpacity onPress={handleSetBoss}>
        <Text> 사장님 등록하기</Text>
      </TouchableOpacity>
    </View>
  )
}
