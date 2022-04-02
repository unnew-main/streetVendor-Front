import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView } from 'react-native'
import LoginPage from './screens/LoginPage'
import { getIdToken } from './storage/token'
const App = () => {
  return (
    <SafeAreaView>
      <Text>App</Text>
      <Text>TOken!</Text>

      <LoginPage />
    </SafeAreaView>
  )
}

export default App
