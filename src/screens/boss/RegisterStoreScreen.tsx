import {
  IntroApp,
  OuttroApp,
  SetCNDApp,
  SetLocationApp,
  SetMenuApp,
  SetOpenTimeApp,
  SetPictureApp,
} from '@/apps/boss/registerStore'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

export type StackRegisterStoreList = {
  Intro: undefined
  SetCND: undefined
  SetStoreName: undefined
  SetLocation: undefined
  SetOpenTime: undefined
  SetMenu: undefined
  SetPicture: undefined
  Outtro: undefined
}

const Stack = createStackNavigator<StackRegisterStoreList>()

export const RegisterStoreScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Intro">
      <Stack.Screen
        name="Intro"
        component={IntroApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SetCND"
        component={SetCNDApp}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SetLocation"
        component={SetLocationApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SetOpenTime"
        component={SetOpenTimeApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SetMenu"
        component={SetMenuApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SetPicture"
        component={SetPictureApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Outtro"
        component={OuttroApp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
// 판매 카테고리 지정
// 가게이름, 가게설명작성
// 장소 지정
// 영업시간 및 날짜 지정
// 메뉴 지정
// 가게 사진을 등록(나중에 지정 가능?)

// {
//   "businessHours": [
//     {
//       "days": "FRI",
//       "endTime": {
//         "hour": "string",
//         "minute": "string",
//         "nano": 0,
//         "second": "string"
//       },
//       "startTime": {
//         "hour": "string",
//         "minute": "string",
//         "nano": 0,
//         "second": "string"
//       }
//     }
//   ],
//   "CND": "BUNG_EO_PPANG",
//   "description": "string",
//   "location": "string",
//   "menus": [
//     {
//       "amount": 0,
//       "name": "string",
//       "pictureUrl": "string",
//       "price": 0
//     }
//   ],
//   "name": "string",
//   "paymentMethods": [
//     "ACCOUNT_TRANSFER"
//   ],
//   "pictureUrl": "string"
// }
