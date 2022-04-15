import {
  IntroApp,
  SetCategoryApp,
  SetLocationApp,
  SetMenuApp,
  SetOpenTimeApp,
  SetPictureApp,
  SetStoreNameApp,
} from '@/apps/boss/registerStore'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

export type StackParamList = {
  Intro: undefined
  SetCategory: undefined
  SetStoreName: undefined
  SetLocation: undefined
  SetOpenTime: undefined
  SetMenu: undefined
  SetPicture: undefined
}

const Stack = createStackNavigator<StackParamList>()

export const RegisterStoreScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Intro">
      <Stack.Screen
        name="Intro"
        component={IntroApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SetCategory"
        component={SetCategoryApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SetStoreName"
        component={SetStoreNameApp}
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
//   "category": "BUNG_EO_PPANG",
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
