import axios from 'axios'
import { setting } from '@/constants'
import { tokenHelper } from '@/util/tokenHelper'

export default {
  getAuth: async (url: string, params: any) => {
    return axios.get(setting.apiUrl + url, {
      params,
      headers: {
        Authorization: `Bearer ${JSON.parse(await tokenHelper.getIdToken())}`,
      },
    })
  },

  get: async (url: string, params: any) =>
    await axios.get(setting.apiUrl + url, { params }),

  postAuth: async (url: string, params: any) => {
    return axios({
      method: 'post',
      url: setting.apiUrl + url,
      data: params,
      headers: {
        Authorization: `Bearer ${JSON.parse(await tokenHelper.getIdToken())}`,
      },
    })
  },

  post: async (url: string, params: any) =>
    await axios.post(setting.apiUrl + url, params),
}
