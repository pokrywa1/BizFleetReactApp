import * as yup from "yup"
import axios, {AxiosResponse} from "axios"
import {API_URL} from "../../../config/env.ts"

export type TSignUpFormFields = {
  email: string;
  username: string;
  password: string;
  fullName: string;
  role: string;
}

export const signUpSchema = yup.object().shape({
  email: yup.string().required('e-mail wymagany'),
  username: yup.string().required('username wymagany'),
  password: yup.string().required('password wymagany'),
  fullName: yup.string().required('fullName wymagany'),
})
export type TSignUpFormResponse = unknown

export const postSignUp = (
  data: TSignUpFormFields,
): Promise<AxiosResponse<TSignUpFormResponse>['data']> => {
  return axios({
    method: 'POST',
    data: {...data, role:"admin"},
    url: `${API_URL}/users`,
  }).then(({ data }) => data)
}
