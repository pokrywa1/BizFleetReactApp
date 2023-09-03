import * as yup from 'yup'
import axios, { AxiosResponse } from 'axios'
import { API_URL } from '../../../config/env.ts'

export type TPutCarFormFields = {
  licensePlate: string
}

export const TPutCarSchema = yup.object().shape({
  licensePlate: yup.string().nullable().required('Rejestracja jest wymagane'),
})

export const putCar =
  (carId: string) =>
  (data: TPutCarFormFields): Promise<AxiosResponse<unknown>> => {
    return axios({
      method: 'PUT',
      data: data,
      url: `${API_URL}/cars/${carId}`,
    }).then(({ data }) => data)
  }
