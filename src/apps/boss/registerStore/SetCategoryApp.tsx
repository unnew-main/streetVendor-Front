import { SetCategoryScreen } from '@/screens/boss/registerStore'
import React from 'react'

export const SetCategoryApp = ({ navigation: { navigate } }) => {
  const handleRouter = () => {
    navigate('SetStoreName')
  }
  return <SetCategoryScreen handleRouter={handleRouter} />
}
