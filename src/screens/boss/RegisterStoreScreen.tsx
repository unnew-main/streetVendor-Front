import {
  IntroApp,
  OuttroApp,
  SetCNDApp,
  SetLocationApp,
  SetMenuApp,
  SetBusinessHoursApp,
  SetPictureApp,
} from '@/apps/boss/registerStore'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import {
  RegisterStoreScreenProps,
  StackRegisterStoreList,
} from './RegisterStoreScreen.type'

const Stack = createStackNavigator<StackRegisterStoreList>()

export const RegisterStoreScreen = ({
  storeProps,
}: RegisterStoreScreenProps) => {
  console.log('RegisterStoreScreen: ', storeProps.data)
  return (
    <Stack.Navigator initialRouteName="Intro">
      <Stack.Screen
        name="Intro"
        component={IntroApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SetCND" options={{ headerShown: false }}>
        {props => (
          <SetCNDApp
            data={{
              name: storeProps.data.name,
              category: storeProps.data.category,
              description: storeProps.data.description,
              paymentMethods: storeProps.data.paymentMethods,
            }}
            handle={{
              handleCategory: storeProps.handle.handleCategory,
              handleDescription: storeProps.handle.handleDescription,
              handleName: storeProps.handle.handleName,
              handlePaymentMethods: storeProps.handle.handlePaymentMethods,
            }}
            {...props}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="SetLocation" options={{ headerShown: false }}>
        {props => (
          <SetLocationApp
            location={storeProps.data.location}
            handleLocation={storeProps.handle.handleLocation}
            {...props}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="SetBusinessHours" options={{ headerShown: false }}>
        {props => (
          <SetBusinessHoursApp
            handleBusinessHours={storeProps.handle.handleBusinessHours}
            {...props}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="SetMenu" options={{ headerShown: false }}>
        {props => (
          <SetMenuApp handleMenu={storeProps.handle.handleMenu} {...props} />
        )}
      </Stack.Screen>

      <Stack.Screen name="SetPicture" options={{ headerShown: false }}>
        {props => (
          <SetPictureApp
            pictureUrl={storeProps.data.pictureUrl}
            handlePictureUrl={storeProps.handle.handlePictureUrl}
            {...props}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="Outtro" options={{ headerShown: false }}>
        {props => <OuttroApp data={storeProps.data} {...props} />}
      </Stack.Screen>
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
