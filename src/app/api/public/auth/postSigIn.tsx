import * as yup from 'yup'
import axios from 'axios'

export type TSignInFormFields = {
  email: string
  password: string
}

export const signInSchema = yup.object().shape({
  email: yup.string().required('e-mail wymagany'),
  password: yup.string().required('e-mail wymagany'),
})
export const postSignIn = (data: TSignInFormFields) => {
  return axios({
    method: 'POST',
    data: data,
    url: 'http://localhost:5000/users/sign-in',
  })
}
