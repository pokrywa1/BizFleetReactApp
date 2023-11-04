import axios, { AxiosResponse } from 'axios'
import { API_URL } from '../../../config/env.ts'

export type TUserAccountRole = 'admin' | 'user'

export type TUserAccount = {
  accessToken: string | null
  email: string | null
  fullName: string | null
  id: string | null
  role: TUserAccountRole
  username: string | null
}
export const getMe = (): Promise<AxiosResponse<TUserAccount>['data']> =>
  axios({
    method: 'GET',
    url: `${API_URL}/users/me`,
  }).then(({ data }) => data)
