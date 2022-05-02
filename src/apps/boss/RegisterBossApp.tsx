import { memberApi } from '@/apis'
import { RegisterBossScreen } from '@/screens/boss'
import { goAlert } from '@/utils/goAlert'
import React, { useCallback, useState } from 'react'

export type RegisterBossType = {
  bossName: string
  bossPhoneNumber: string
}
export const RegisterBossApp = () => {
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')

  const handleSetBoss = useCallback(async () => {
    try {
      if (name === '' || phone === '') {
        goAlert('이름과 전화번호를 입력해주세요')
        throw Error
      }
      await memberApi.setBossInfo({ bossName: name, bossPhoneNumber: phone })
    } catch (e) {
      console.log('handleSetBoss Error: ', e)
      goAlert(String(e))
    }
  }, [name, phone])

  return (
    <RegisterBossScreen
      handleSetBoss={handleSetBoss}
      name={name}
      phone={phone}
      setName={setName}
      setPhone={setPhone}
    />
  )
}
