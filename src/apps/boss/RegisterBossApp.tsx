import { memberApi } from '@/apis'
import { RegisterBossScreen } from '@/screens/boss'
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
      await memberApi.setBossInfo({ bossName: name, bossPhoneNumber: phone })
    } catch (e) {
      console.log('handleSetBoss Error: ', e)
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
