import React, { useState } from 'react'
import { RegisterMemberScreen } from '@/screens'
import { memberApi } from '@/apis'

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
