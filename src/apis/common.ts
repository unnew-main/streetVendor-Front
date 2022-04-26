import axios from 'axios'
import { setting } from '@/constants'
import { sessionHelper } from '@/utils/sessionHelper'

export default {
  getAuth: async (url: string, params: any) => {
    return await axios({
      method: 'get',
      url: setting.apiUrl + url,
      params,
      headers: {
        Authorization: `Bearer ${await sessionHelper.getSession()}`,
      },
    })
  },

  get: async (url: string, params: any) =>
    await axios.get(setting.apiUrl + url, { params }),

  postAuth: async (url: string, params: any) => {
    return await axios({
      method: 'post',
      url: setting.apiUrl + url,
      data: params,
      headers: {
        Authorization: `Bearer ${await sessionHelper.getSession()}`,
      },
    })
  },

  post: async (url: string, params: any) =>
    await axios.post(setting.apiUrl + url, params),

  putAuth: async (url: string, params: any) => {
    return await axios({
      method: 'put',
      url: setting.apiUrl + url,
      data: params,
      headers: {
        Authorization: `Bearer ${await sessionHelper.getSession()}`,
      },
    })
  },
}
