import api from './common'

export const authApi = {
  login: async (accessToken: string) => {
    const response = await api.post('/api/v1/auth/google', {
      requestToken: accessToken,
    })
    return response
  },
  logout: async () => {
    const response = await api.postAuth('/api/v1/log-out', {})
    return response
  },
}
