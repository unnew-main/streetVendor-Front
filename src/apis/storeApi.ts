import { RegisterStorePropsType } from '@/types/store.type'
import api from './common'

export const storeApi = {
  getListStore: async () => api.getAuth('/api/v1/my-stores', {}),

  getDetailStore: async (storeId: number) =>
    api.getAuth(`/api/v1/store/detail/${storeId}`, {}),

  createStore: async (props: RegisterStorePropsType) =>
    api.postAuth('/api/v1/store', props),

  openStore: async (storeId: number) =>
    api.putAuth(`/api/v1/store/sales-status/open/${storeId}`, {}),

  closeStore: async (storeId: number) =>
    api.putAuth(`/api/v1/store/sales-status/closed/${storeId}`, {}),

  /**
   *
   * @param distance N키로미터(MAX: 2)
   * @param latitude 경도
   * @param longitude 위도
   * @returns
   */
  getLocationStore: async (
    distance: number,
    latitude: number,
    longitude: number,
  ) => api.get('/api/v1/stores/location', { distance, latitude, longitude }),

  getLocationAllStore: async (lastId: number, size: number) =>
    api.get('/api/v1/stores', { lastId, size }),

  removeStore: async (storeId: number) =>
    api.deleteAuth(`/api/v1/store/${storeId}`, {}),
}
