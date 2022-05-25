import { CustomTextInput } from '@/components/common'
import React, { Dispatch, SetStateAction } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

type Props = {
  handleSetBoss: () => void
  name: string
  phone: string
  setName: Dispatch<SetStateAction<string>>
  setPhone: Dispatch<SetStateAction<string>>
  handleGoBack: () => void
}
export const RegisterBossScreen = ({
  handleSetBoss,
  name,
  phone,
  setName,
  setPhone,
  handleGoBack,
}: Props) => {
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
        <TouchableOpacity onPress={handleGoBack}>
          <Text>돌아가기</Text>
        </TouchableOpacity>
        <Text>사장님 이름입력 </Text>
        <CustomTextInput
          onChangeText={setName}
          value={name}
          placeholder="홍길동"
        />
        <Text>전화번호 입력 </Text>
        <CustomTextInput
          onChangeText={setPhone}
          value={phone}
          placeholder="01012345678"
          keyboardType="number-pad"
        />
        <TouchableOpacity onPress={handleSetBoss}>
          <Text> 사장님 등록하기</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}
