import { OrderType } from '@/types/order.type'
import api from './common'

export const orderApi = {
  userOrder: async (props: OrderType) => {
    console.log(props)
    return api.postAuth('/api/v1/order', props)
  },
  bossCancelOrder: async (storeId: number, orderId: number) => {
    return api.deleteAuth(`/api/v1/${storeId}/orders/${orderId}/cancel`, {})
  },
  userCancelOrder: async (orderId: number) => {
    return api.deleteAuth(`/api/v1/orders/${orderId}/cancel`, {})
  },
  bossCheckOrder: async (storeId: number) => {
    return api.getAuth(`/api/v1/orders/${storeId}`, {})
  },
}
