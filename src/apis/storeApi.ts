import { RegisterStorePropsType } from '@/types/store.type'
import api from './common'

export const storeApi = {
  getListStore: async () => {
    const response = await api.getAuth('/api/v1/my-stores', {})
    return response
  },

  getDetailStore: async (storeId: number) => {
    const response = await api.getAuth(`/api/v1/store/detail/${storeId}`, {})
    return response
  },

  createStore: async (props: RegisterStorePropsType) => {
    const response = await api.postAuth('/api/v1/store', props)
    return response
  },

  openStore: async (storeId: number) => {
    const response = await api.putAuth(
      `/api/v1/store/sales-status/open/${storeId}`,
      {},
    )
    return response
  },
  closeStore: async (storeId: number) => {
    const response = await api.putAuth(
      `/api/v1/store/sales-status/closed/${storeId}`,
      {},
    )
    return response
  },

  /**
   * @param distance N키로미터(MAX: 2)
   * @param latitude 경도
   * @param longitude 위도
   * @returns
   */
  getLocationOpenStore: async (
    distance: number,
    latitude: number,
    longitude: number,
  ) => {
    const response = await api.get('/api/v1/stores/location/open', {
      distance,
      latitude,
      longitude,
    })
    return response
  },

  getLocationAllStore: async (
    distance: number,
    latitude: number,
    longitude: number,
  ) => {
    const response = await api.get('/api/v1/stores/location', {
      distance,
      latitude,
      longitude,
    })
    return response
  },

  getAllLocationStore: async (lastId: number, size: number) => {
    const response = await api.get('/api/v1/stores', { lastId, size })

    return response
  },
  removeStore: async (storeId: number) => {
    const response = await api.deleteAuth(`/api/v1/store/${storeId}`, {})
    return response
  },
}
