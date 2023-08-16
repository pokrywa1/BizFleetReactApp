import * as yup from 'yup'

export type TSignInFormFields = {
  email: string
}

export const signInSchema = yup.object().shape({
  email: yup.string().required('e-mail wymagany'),
})
export const postSignIn = (data: TSignInFormFields) => {}
