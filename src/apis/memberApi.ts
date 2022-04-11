import { tokenHelper } from '@/util/tokenHelper'
import { GoogleSignin } from '@react-native-community/google-signin'
import api from './common'

export const memberApi = {
  login: async () => {
    return api.postAuth('/api/v1/auth/google', {
      // requestToken: JSON.parse(await tokenHelper.getIdToken()),
      requestToken: await (await GoogleSignin.getTokens()).accessToken,

      // requestToken:
      // 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImYxMzM4Y2EyNjgzNTg2M2Y2NzE0MDhmNDE3MzhhN2I0OWU3NDBmYzAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIzMjg4NTYyODI5MjMtcjM4MmxoN25ndTg0bzQ3Z21xYzZyY3JlZjdnZmo1bTguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIzMjg4NTYyODI5MjMtcHJrb2Yxdm5iNWhhcTdwc3F1cTlpbmtxNG9wYjhpYWguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDIzNTYzNTkyNzY0ODI2ODExNTUiLCJlbWFpbCI6IjE5NzAwMDU4MjZjQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoi7Jyk7Jq07J28IiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpLZWQ3ZWF5ZTVfNWNXazRvcE5GWlp6eVJscy01aXZhU05ZaGdhPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IuyatOydvCIsImZhbWlseV9uYW1lIjoi7JykIiwibG9jYWxlIjoia28iLCJpYXQiOjE2NDk1OTkxMDgsImV4cCI6MTY0OTYwMjcwOH0.V5NpJCB7PbSXFNsrQx-2iiCDrMYJnNqqh_jaQQaSnuVlpLduSUzjjqKQb_F28c_nzLW3vPaxu8_jgPJdeMXz7_wITWKQyvvIfsr_8qfvOLhye7IZFWCOecS6AddJ1eqd4BbKtilHndBX7eHGQnk5VxL9hboqrvZKzPzV9jaxnGCLDEqokRKH5iKx9HulDyBQunHrL-z-0VAJ-g7oNhuAa2qaSVVQChW_FOfGA9Du6AB5-84xNggUT_8QAqPep8O0kFQbjCC7nDf4o7K-zDNOsWw1DJnd3GEKEnVycupMwIFdKNCbUCEE2eXPPew0v5dGXMKwrYQtU0zr4WFL1laxyQ',
      // 'ya29.A0ARrdaM9QLkSRfHUWhzOh-g9i9KFvJz6yKARrSNuMQpIkyiIp7h-yoFKH5ua_Jl-pgHbpoTuWDK0iieZvxLhT8k0xm3R_gdGPa98SmbW6fPsrNOsOV34Uz2ly2ksNUlJtr8wyvoEwwVujoQJ6iYuYuqO95m7p-WF9oS-3M_S9',
    })
  },
  logout: async () => {
    return api.post('/api/v1/log-out', {})
  },
}
