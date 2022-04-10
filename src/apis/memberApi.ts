import { tokenHelper } from '@/util/tokenHelper'
import api from './common'

export const memberApi = {
  login: async () => {
    return api.post('/api/v1/auth/google', await tokenHelper.getIdToken())
  },
  logout: async () => {
    return api.post('/api/v1/log-out', {})
  },
}
