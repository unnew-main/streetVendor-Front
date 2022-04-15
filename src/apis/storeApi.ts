import api from './common'

export const storeApi = {
  getStore: async () => {
    return api.getAuth('/api/v1/my-stores', {})
  },
  createStore: async (props: string) => {
    return api.postAuth('/api/v1/store', props)
  },
}
