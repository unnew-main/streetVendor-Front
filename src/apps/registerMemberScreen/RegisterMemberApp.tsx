import React, { useState } from 'react'
import { RegisterMemberScreen } from '@/screens'

export function RegisterMemberApp() {
  const [userName, setUserName] = useState<string>('')
  const handleRegister = () => {
    console.log(userName)
  }

  return (
    <RegisterMemberScreen
      userName={userName}
      setUserName={setUserName}
      handleRegister={handleRegister}
    />
  )
}
