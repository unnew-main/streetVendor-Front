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
  changeStateStore: async (storeId: number, state: 'CLOSED' | 'OPEN') => {
    return api.putAuth(`/api/v1/store/sales-status/${storeId}`, {
      salesStatus: state,
    })
  },
}
