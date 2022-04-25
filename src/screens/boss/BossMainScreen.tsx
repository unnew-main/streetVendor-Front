import { RegisterStoreButton } from '@/apps/boss/components/RegisterStoreButton'
import { GoogleLogoutbutton, SignoutButton } from '@/components'
import React from 'react'
import { Text, View } from 'react-native'

type BossMainScreenProps = {
  list: object[]
}
export const BossMainScreen = ({ list }: BossMainScreenProps) => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Text>보스 메인스크린</Text>
      {list.length ? (
        list.map((data, i) => (
          <View key={i}>
            <Text>list</Text>
            <Text>{data}</Text>
          </View>
        ))
      ) : (
        <View>
          <Text>가게가 없습니다!</Text>
          <RegisterStoreButton />
        </View>
      )}
      <GoogleLogoutbutton />
      <SignoutButton />
    </View>
  )
}
