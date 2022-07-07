import { memberApi } from '@/apis'
import { ReportError } from '@/utils/reportError'
import { NavigationContext } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import React from 'react'
export type UserInfoType = {
  email: string
  memberId: number
  nickName: string
  profileUrl: string
}

export const useMember = () => {
  const navigator = React.useContext(NavigationContext)

  const [memberInfo, setMemberInfo] = useState<UserInfoType>({
    email: '',
    memberId: 0,
    nickName: '',
    profileUrl: '',
  })

  useEffect(() => {
    ;(async () => {
      try {
        const {
          data: { data },
        } = await memberApi.getInfo()
        setMemberInfo(data)
      } catch (error) {
        if (error instanceof Error) {
          ReportError(error.message, navigator)
        }
      }
    })()
  }, [navigator])

  return {
    memberInfo,
  }
}
