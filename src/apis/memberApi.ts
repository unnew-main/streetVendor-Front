import { RegisterBossType } from '@/apps/boss/RegisterBossApp'
import { UserSignUpDataProps } from '@/apps/RegisterMemberApp'
import api from './common'

export const memberApi = {
  signUp: async (props: UserSignUpDataProps) => {
    return api.post('/api/v1/sign-up', props)
  },
  signOut: async () => {
    return api.putAuth('/api/v1/sign-out', {})
  },
  getInfo: async () => {
    return api.getAuth('/api/v1/my-page', {})
  },
  setBossInfo: async (props: RegisterBossType) => {
    return api.postAuth('/api/v1/bossInfo', props)
  },
  getBossInfo: async () => {
    return api.getAuth('/api/v1/boss/check', {})
  },
}
