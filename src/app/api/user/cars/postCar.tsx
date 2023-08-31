import * as yup from 'yup'
import axios, { AxiosResponse } from 'axios'
import { API_URL } from '../../../config/env.ts'

export type TPostCarFormFields = {
  model: string
  licensePlate: string
  year: number
  carPhotoId: string
}

export const TPostCarSchema = yup.object().shape({
  model: yup.string().nullable().required('Model jest wymagany'),
  licensePlate: yup.string().nullable().required('Rejestracja jest wymagan'),
  year: yup.number().nullable().required('Rocznik jest wymgany'),
  carPhotoId: yup.string().nullable(),
})

export const postSignIn = (data: TPostCarFormFields): Promise<AxiosResponse<unknown>['data']> => {
  return axios({
    method: 'POST',
    data: data,
    url: `${API_URL}/cars`,
  }).then(({ data }) => data)
}
