import {
  IntroApp,
  OuttroApp,
  SetCNDApp,
  SetLocationApp,
  SetMenuApp,
  SetBusinessHoursApp,
  SetPictureApp,
} from '@/apps/boss/registerStore'
import { StackRegisterStoreList } from '@/types/routeType'
import { RegisterStoreScreenProps } from '@/types/storeType'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

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
            busniessHours={storeProps.data.businessHours}
            handleBusinessHours={storeProps.handle.handleBusinessHours}
            {...props}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="SetMenu" options={{ headerShown: false }}>
        {props => (
          <SetMenuApp
            handleMenu={storeProps.handle.handleMenu}
            menu={storeProps.data.menus}
            {...props}
          />
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
