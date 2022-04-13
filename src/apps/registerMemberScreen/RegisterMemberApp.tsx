import React, { useState } from 'react'
import { RegisterMemberScreen } from '@/screens'
import { authApi, memberApi } from '@/apis'
import { NavigationContext } from '@react-navigation/native'
import { sessionHelper } from '@/util/sessionHelper'

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

export function RegisterMemberApp({
  route: {
    params: { data, accessToken },
  },
}: RegisterMemberProps) {
  const navigator = React.useContext(NavigationContext)
  const [userName, setUserName] = useState<string>('')
  const UserSignUpData: UserSignUpDataProps = {
    email: data.email,
    name: data.name,
    nickName: userName,
    profileUrl: data.profileUrl,
  }
  const handleRegister = async () => {
    try {
      await memberApi.signUp(UserSignUpData)
      const { data: session } = await authApi.login(accessToken)
      await sessionHelper.setSession(session.data.sessionId)

      navigator?.reset({ routes: [{ name: 'Home' }] })
    } catch (e) {
      console.log('RegisterError: ', e)
    }
  }

  return (
    <RegisterMemberScreen
      userName={userName}
      setUserName={setUserName}
      handleRegister={handleRegister}
    />
  )
}
