import { RegisterBossType } from '@/apps/boss/RegisterBoss'
import { UserSignUpDataProps } from '@/apps/RegisterMember'
import api from './common'

export const memberApi = {
  signUp: async (props: UserSignUpDataProps) => {
    const response = await api.post('/api/v1/sign-up', props)
    return response
  },
  signOut: async () => {
    const response = await api.putAuth('/api/v1/sign-out', {})
    return response
  },
  getInfo: async () => {
    const response = await api.getAuth('/api/v1/my-page', {})
    return response
  },
  setBossInfo: async (props: RegisterBossType) => {
    const response = await api.postAuth('/api/v1/bossInfo', props)
    return response
  },
  getBossInfo: async () => {
    const response = await api.getAuth('/api/v1/boss/check', {})
    return response
  },
}
