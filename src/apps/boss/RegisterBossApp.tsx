import { memberApi } from '@/apis'
import { RegisterBossScreen } from '@/screens/boss'
import { goAlert } from '@/utils/goAlert'
import React, { useCallback, useState } from 'react'
import { NavigationContext } from '@react-navigation/native'
import { ReportError } from '@/utils/reportError'

export type RegisterBossType = {
  bossName: string
  bossPhoneNumber: string
}
export const RegisterBossApp = () => {
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
          ReportError(error.message)
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
    <RegisterBossScreen
      handleGoBack={handleGoBack}
      handleSetBoss={handleSetBoss}
      name={name}
      phone={phone}
      setName={setName}
      setPhone={setPhone}
    />
  )
}
