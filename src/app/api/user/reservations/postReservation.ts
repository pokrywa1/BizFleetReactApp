import * as yup from 'yup'
import axios, { AxiosResponse } from 'axios'
import { API_URL } from '../../../config/env.ts'

export type TPostCarReservationFormFields = {
  carId: string
  startTime: Date | null
  endTime: Date | null
}

export const TPostCarReservationSchema = yup.object().shape({
  carId: yup.string().nullable().required('Samochód jest wymagany'),
  startTime: yup.string().nullable().required('Data rozpoczęcia jest wymagana'),
  endTime: yup.number().nullable().required('Data zakończenia jest wymagana'),
})
export const postCarReservation = (
  data: TPostCarReservationFormFields,
): Promise<AxiosResponse<unknown>['data']> => {
  return axios({
    method: 'POST',
    data: data,
    url: `${API_URL}/car-reservations`,
  }).then(({ data }) => data)
}
