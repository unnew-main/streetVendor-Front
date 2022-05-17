import { RegisterStorePropsType } from '@/types/storeType'
import api from './common'

export const storeApi = {
  getListStore: async () => {
    return api.getAuth('/api/v1/my-stores', {})
  },
  getDetailStore: async (storeId: number) => {
    return api.getAuth(`/api/v1/store/detail/${storeId}`, {})
  },
  createStore: async (props: RegisterStorePropsType) => {
    return api.postAuth('/api/v1/store', props)
  },
  openStore: async (storeId: number) => {
    return api.putAuth(`/api/v1/store/sales-status/open/${storeId}`, {})
  },
  closeStore: async (storeId: number) => {
    return api.putAuth(`/api/v1/store/sales-status/closed/${storeId}`, {})
  },
  /**
   *
   * @param distance N키로미터
   * @param latitude 경도
   * @param longitude 위도
   * @returns
   */
  getLocationStore: async (
    distance: number,
    latitude: number,
    longitude: number,
  ) => {
    return api.get('/api/v1/stores/location', { distance, latitude, longitude })
  },

  getLocationAllStore: async (lastId: number, size: number) => {
    return api.get('/api/v1/stores', { lastId, size })
  },
}
