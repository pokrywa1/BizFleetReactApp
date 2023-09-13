import axios, { AxiosResponse } from 'axios'
import { API_URL } from '../../../config/env.ts'

export const putReservationCancel = (
  carReservationId: string,
): Promise<AxiosResponse<unknown>['data']> => {
  return axios({
    method: 'PUT',
    url: `${API_URL}/car-reservations/${carReservationId}/cancel`,
  }).then(({ data }) => data)
}
