import {
  SetLocation,
  SetBusinessHours,
  SetBasicInformation,
  SetMenu,
  Outtro,
  SetStorePicture,
  Intro,
} from '@/apps/boss/registerStore/'

import { StackRegisterStoreList } from '@/types/route.type'
import { RegisterStoreScreenProps } from '@/types/store.type'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

const Stack = createStackNavigator<StackRegisterStoreList>()

export const RegisterStoreStack = ({
  storeProps,
}: RegisterStoreScreenProps) => {
  console.log('RegisterStoreScreen: ', storeProps.data)
  return (
    <Stack.Navigator initialRouteName="Intro">
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SetCND" options={{ headerShown: false }}>
        {props => (
          <SetBasicInformation
            data={{
              name: storeProps.data.name,
              category: storeProps.data.category,
              storeDescription: storeProps.data.storeDescription,
              paymentMethods: storeProps.data.paymentMethods,
              locationDescription: storeProps.data.locationDescription,
            }}
            handle={{
              handleCategory: storeProps.handle.handleCategory,
              handleDescription: storeProps.handle.handleDescription,
              handleName: storeProps.handle.handleName,
              handlePaymentMethods: storeProps.handle.handlePaymentMethods,
              handleLocationDescription:
                storeProps.handle.handleLocationDescription,
            }}
            {...props}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="SetLocation" options={{ headerShown: false }}>
        {props => (
          <SetLocation
            location={storeProps.data.location}
            handleLocation={storeProps.handle.handleLocation}
            {...props}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="SetBusinessHours" options={{ headerShown: false }}>
        {props => (
          <SetBusinessHours
            busniessHours={storeProps.data.businessHours}
            handleBusinessHours={storeProps.handle.handleBusinessHours}
            {...props}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="SetMenu" options={{ headerShown: false }}>
        {props => (
          <SetMenu
            handleMenu={storeProps.handle.handleMenu}
            menu={storeProps.data.menus}
            {...props}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="SetPicture" options={{ headerShown: false }}>
        {props => (
          <SetStorePicture
            pictureUrl={storeProps.data.pictureUrl}
            handlePictureUrl={storeProps.handle.handlePictureUrl}
            {...props}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="Outtro" options={{ headerShown: false }}>
        {props => <Outtro data={storeProps.data} {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
