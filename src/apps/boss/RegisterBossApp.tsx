import { memberApi } from '@/apis'
import { RegisterBossScreen } from '@/screens/boss'
import { goAlert } from '@/utils/goAlert'
import React, { useCallback, useState } from 'react'
import { NavigationContext } from '@react-navigation/native'

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
        goAlert('이름과 전화번호를 입력해주세요')
        throw Error
      }
      await memberApi.setBossInfo({ bossName: name, bossPhoneNumber: phone })
      goAlert('사장님 등록이 완료되었습니다.')

      navigator?.navigate('BossStoreList')
    } catch (e) {
      console.log('handleSetBoss Error: ', e)
      goAlert(String(e))
    }
  }, [name, navigator, phone])

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
