import { memberApi } from '@/apis'
import { goAlert } from '@/utils/goAlert'
import React, { useCallback, useState } from 'react'
import { NavigationContext } from '@react-navigation/native'
import { ReportError } from '@/utils/reportError'
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { CustomTextInput } from '@/components/common'

export type RegisterBossType = {
  bossName: string
  bossPhoneNumber: string
}
export const RegisterBoss = () => {
  const navigator = React.useContext(NavigationContext)

  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')

  const handleSetBoss = useCallback(async () => {
    try {
      if (name === '' || phone === '') {
        throw String('이름과 전화번호를 입력해주세요')
      }
      await memberApi.setBossInfo({ bossName: name, bossPhoneNumber: phone })
      goAlert('사장님 등록이 완료되었습니다.')
      navigator?.reset({ routes: [{ name: 'BossStoreList' }] })
    } catch (error) {
      console.log('handleSetBoss Error: ', error)
      if (error instanceof Error) {
        if (error.message.lastIndexOf('400') !== -1) {
          goAlert('전화번호 10~11자를 입력해주세요.')
        } else {
          ReportError(error.message, navigator)
        }
      } else {
        goAlert(String(error))
      }
    }
  }, [name, navigator, phone])
  const handleGoBack = () => {
    navigator?.reset({ routes: [{ name: 'SelectJob' }] })
  }
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
