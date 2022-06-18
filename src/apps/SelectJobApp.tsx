import React, { useCallback } from 'react'

import { SelectJobScreen } from '@/screens'
import { NavigationContext } from '@react-navigation/native'
import { useMember } from '@/hooks/useMember.hook'

export const SelectJobApp = () => {
  const navigator = React.useContext(NavigationContext)
  const { memberInfo } = useMember()
  // const [userInfo, setUserInfo] = useState<UserInfoType>({
  //   email: '',
  //   memberId: 0,
  //   nickName: '',
  //   profileUrl: '',
  // })

  // useEffect(() => {
  //   ;(async () => {
  //     const {
  //       data: { data },
  //     } = await memberApi.getInfo()
  //     console.log(data)
  //     setUserInfo(data)
  //   })()
  // }, [])

  const handlePressUser = useCallback(() => {
    navigator?.reset({ routes: [{ name: 'UserStack' }] })
  }, [navigator])
  const handlePressBoss = useCallback(() => {
    navigator?.reset({ routes: [{ name: 'BossStack' }] })
  }, [navigator])
  return (
    <SelectJobScreen
      handlePressUser={handlePressUser}
      handlePressBoss={handlePressBoss}
      memberInfo={memberInfo}
    />
  )
}
