import * as yup from 'yup'
import axios from 'axios'
import { API_URL } from '../../../config/env.ts'

export type organizationMemberFormField = {
  username: string
  fullName: string
  email: string
  role: string
}

export const organizationMemberSchema = yup.object().shape({
  username: yup.string().required('Pole "Nazwa użytkownika" jest wymagane'),
  fullName: yup.string().required('Pole "Pełne imię" jest wymagane'),
  email: yup
    .string()
    .email('Niepoprawny format adresu email')
    .required('Pole "Email" jest wymagane'),
  role: yup.string().required('Pole "Rola" jest wymagane'),
})

export const postOrganizationMember = (data: organizationMemberFormField) =>
  axios.post(`${API_URL}/organizations`, data)
