import { OrderType } from '@/types/order.type'
import api from './common'

export const orderApi = {
  userOrder: async (props: OrderType) => {
    const response = await api.postAuth('/api/v1/order', props)
    return response
  },
  userCheckOrder: async () => {
    const response = await api.getAuth('/api/v1/orders', {})
    return response
  },

  bossCancelOrder: async (storeId: number, orderId: number) => {
    const response = await api.deleteAuth(
      `/api/v1/${storeId}/orders/${orderId}/cancel`,
      {},
    )
    return response
  },
  userCancelOrder: async (orderId: number) => {
    const response = await api.deleteAuth(
      `/api/v1/orders/${orderId}/cancel`,
      {},
    )
    return response
  },
  bossCheckOrder: async (storeId: number) => {
    const response = await api.getAuth(`/api/v1/orders/${storeId}`, {})
    return response
  },
}
