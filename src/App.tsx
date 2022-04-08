import React from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from '@/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SplashApp, LoginApp, HomeApp } from './apps'

const Stack = createStackNavigator()
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
              name="Splash"
              component={SplashApp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginApp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={HomeApp}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App
