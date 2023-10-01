import * as yup from 'yup'
import axios from 'axios'
import { API_URL } from '../../../config/env.ts'

export type changePasswordFormFields = {
  password: string | null
  newPassword: string | null
  confirmPassword: string | null
}

export const changePasswordSchema = yup.object().shape({
  password: yup.string().nullable().required('Aktualne hasło jest wymagane'),
  newPassword: yup.string().nullable().required('Nowe hasło jest wymagane'),
  confirmPassword: yup.string().nullable().required('Powtórzenie nowego hasła jest wymagane'),
})
export const putChangePasswordForm = (data: changePasswordFormFields) =>
  axios.put(`${API_URL}/users/change-password`, data)
