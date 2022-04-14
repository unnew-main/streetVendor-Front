import React from 'react'

import { SelectJobScreen } from '@/screens'
import { NavigationContext } from '@react-navigation/native'

export const SelectJobApp = () => {
  const navigator = React.useContext(NavigationContext)

  const handlePressUser = () => {
    navigator?.reset({ routes: [{ name: 'UserMain' }] })
  }
  const handlePressBoss = () => {
    navigator?.reset({ routes: [{ name: 'BossSplash' }] })
  }
  return (
    <SelectJobScreen
      handlePressUser={handlePressUser}
      handlePressBoss={handlePressBoss}
    />
  )
}
