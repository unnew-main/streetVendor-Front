import React, { useEffect } from 'react'
import { NavigationContext, RouteProp } from '@react-navigation/native'
import { ReportError } from '@/utils/reportError'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BossOrderList } from './BossOrderList'
import { BossStoreInfo } from './BossStoreInfo'
import { useStore } from './BossStoreTab.hook'
import { storeApi } from '@/apis/storeApi'
type Props = {
  route: RouteProp<{
    params: {
      storeId: number
    }
  }>
}
const Tab = createBottomTabNavigator()

export const BossStoreTab = ({ route }: Props) => {
  const { storeId } = route.params
  const navigator = React.useContext(NavigationContext)
  const { storeData, handleStoreData } = useStore()

  useEffect(() => {
    ;(async () => {
      try {
        const {
          data: { data },
        } = await storeApi.getDetailStore(storeId)
        handleStoreData(data)
      } catch (error) {
        console.log('getDetailStore ERROR:', error)
        if (error instanceof Error) {
          ReportError(error.message, navigator)
        }
      }
    })()
  }, [handleStoreData, navigator, storeId])
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="가게정보"
        options={{
          unmountOnBlur: true,
        }}
      >
        {props => <BossStoreInfo storeData={storeData} {...props} />}
      </Tab.Screen>
      <Tab.Screen
        name="주문주문"
        options={{
          unmountOnBlur: true,
        }}
      >
        {props => <BossOrderList storeId={storeData.storeId} {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}
