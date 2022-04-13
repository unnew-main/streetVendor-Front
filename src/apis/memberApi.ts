import { UserSignUpDataProps } from '@/apps/registerMemberScreen/RegisterMemberApp'
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
}
