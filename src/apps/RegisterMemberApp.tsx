import React, { useCallback, useState } from 'react'
import { RegisterMemberScreen } from '@/screens'
import { authApi, memberApi } from '@/apis'
import { NavigationContext } from '@react-navigation/native'
import { sessionHelper } from '@/utils/sessionHelper'
import { goAlert } from '@/utils/goAlert'
import { useLoading } from '@/hooks/useLoading.hook'

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
          console.log(error.message.lastIndexOf('300'))
          console.log('a', error.message)
        } else if (error.message.search('401')) console.log('c', error.message)
      } else console.log('b', String(error))
      goAlert(String(error))
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
    <RegisterMemberScreen
      userName={userName}
      setUserName={setUserName}
      handleRegister={handleRegister}
    />
  )
}
