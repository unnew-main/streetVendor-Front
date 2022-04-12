import React, { useState } from 'react'
import { RegisterMemberScreen } from '@/screens'
import { memberApi } from '@/apis'
import { NavigationContext } from '@react-navigation/native'

type RegisterMemberProps = {
  route: {
    params: {
      email: string
      name: string
      profileUrl: string
      sessionId: string
      type: string
    }
  }
}

export type UserSignUpDataProps = {
  email: string
  name: string
  nickName: string
  profileUrl: string
}

export function RegisterMemberApp({ route: { params } }: RegisterMemberProps) {
  const navigator = React.useContext(NavigationContext)

  const [userName, setUserName] = useState<string>('')
  const handleRegister = async () => {
    try {
      const UserSignUpData: UserSignUpDataProps = {
        email: params.email,
        name: params.name,
        nickName: userName,
        profileUrl: params.profileUrl,
      }
      await memberApi.signUp(UserSignUpData)
      navigator?.reset({ routes: [{ name: 'Splash' }] })
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
