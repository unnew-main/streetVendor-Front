import api from './common'

export const authApi = {
  login: async (accessToken: string) => {
    return api.post('/api/v1/auth/google', {
      requestToken: accessToken,
    })
  },
  logout: async () => {
    return api.postAuth('/api/v1/log-out', {})
  },
}
