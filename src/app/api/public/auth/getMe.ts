import axios, { AxiosResponse } from 'axios'

export type TUserAccount = {
  id: string
  userName: string
  fullName: string
}
export const getMe = (): Promise<AxiosResponse<TUserAccount>['data']> =>
  axios({
    method: 'GET',
    url: 'http://localhost:5000/users/me',
  }).then(({ data }) => data)
