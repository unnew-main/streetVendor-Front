import React, { useCallback } from 'react'

import { SelectJobScreen } from '@/screens'
import { NavigationContext } from '@react-navigation/native'

export const SelectJobApp = () => {
  const navigator = React.useContext(NavigationContext)

  const handlePressUser = useCallback(() => {
    navigator?.reset({ routes: [{ name: 'UserMain' }] })
  }, [navigator])
  const handlePressBoss = useCallback(() => {
    navigator?.reset({ routes: [{ name: 'BossMain' }] })
  }, [navigator])
  return (
    <SelectJobScreen
      handlePressUser={handlePressUser}
      handlePressBoss={handlePressBoss}
    />
  )
}
