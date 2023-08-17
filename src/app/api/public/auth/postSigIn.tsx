import * as yup from 'yup'
import axios, { AxiosResponse } from 'axios'

export type TSignInFormFields = {
  email: string
  password: string
}

export const signInSchema = yup.object().shape({
  email: yup.string().required('e-mail wymagany'),
  password: yup.string().required('e-mail wymagany'),
})
export type TSignInFormResponse = {
  accessToken: string | null
}
export const postSignIn = (
  data: TSignInFormFields,
): Promise<AxiosResponse<TSignInFormResponse>['data']> => {
  return axios({
    method: 'POST',
    data: data,
    url: 'http://localhost:5000/users/sign-in',
  }).then(({ data }) => data)
}
