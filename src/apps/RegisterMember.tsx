import React, { useCallback, useState } from 'react'
import { authApi, memberApi } from '@/apis'
import { NavigationContext } from '@react-navigation/native'
import { sessionHelper } from '@/utils/sessionHelper'
import { goAlert } from '@/utils/goAlert'
import { useLoading } from '@/hooks/useLoading.hook'
import { ReportError } from '@/utils/reportError'
import styled from 'styled-components/native'
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native'
import { GoogleLogoutbutton } from '@/components/auth'
import { CustomTextInput } from '@/components/common'

type RegisterMemberProps = {
  route: {
    params: {
      data: {
        email: string
        name: string
        nickName: string
        profileUrl: string
      }
      accessToken: string
    }
  }
}

export type UserSignUpDataProps = {
  email: string
  name: string
  nickName: string
  profileUrl: string
}

export function RegisterMember({
  route: {
    params: { data, accessToken },
  },
}: RegisterMemberProps) {
  const navigator = React.useContext(NavigationContext)
  const { onLoading, offLoading } = useLoading()

  const [userName, setUserName] = useState<string>('')

  const handleRegister = useCallback(async () => {
    try {
      onLoading()
      const userSignUpData: UserSignUpDataProps = {
        email: data.email,
        name: data.name,
        nickName: userName,
        profileUrl: data.profileUrl,
      }
      await memberApi.signUp(userSignUpData)
      const { data: session } = await authApi.login(accessToken)
      await sessionHelper.setSession(session.data.sessionId)

      navigator?.reset({ routes: [{ name: 'HomeStack' }] })
      offLoading()
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.lastIndexOf('400') !== -1) {
          goAlert('닉네임은 2~8자로 입력해주세요.')
        } else {
          ReportError(error.message, navigator)
        }
      }
      offLoading()
    }
  }, [
    accessToken,
    data.email,
    data.name,
    data.profileUrl,
    navigator,
    offLoading,
    onLoading,
    userName,
  ])

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
