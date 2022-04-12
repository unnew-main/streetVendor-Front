import { UserSignUpDataProps } from '@/apps/registerMemberScreen/RegisterMemberApp'
import { tokenHelper } from '@/util/tokenHelper'
import api from './common'

export const memberApi = {
  login: async () => {
    return api.postAuth('/api/v1/auth/google', {
      requestToken: await tokenHelper.getIdToken(),
    })
  },
  logout: async () => {
    return api.postAuth('/api/v1/log-out', {})
  },

  signUp: async (props: UserSignUpDataProps) => {
    return api.postAuth('/api/v1/sign-up', props)
  },
}
