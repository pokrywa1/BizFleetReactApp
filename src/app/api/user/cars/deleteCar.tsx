import axios, { AxiosResponse } from 'axios'
import { API_URL } from '../../../config/env.ts'

export const deleteCar = (carId: string): Promise<AxiosResponse<unknown>['data']> => {
  return axios({
    method: 'DELETE',
    url: `${API_URL}/cars/${carId}`,
  }).then(({ data }) => data)
}
