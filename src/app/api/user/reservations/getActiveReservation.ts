import axios, { AxiosResponse } from 'axios'
import { API_URL } from '../../../config/env.ts'
import { useQuery } from 'react-query'
import { TReservation } from './getReservations.ts'

export const getActiveReservations = (): Promise<AxiosResponse<TReservation[]>['data']> =>
  axios({
    method: 'GET',
    url: `${API_URL}/car-reservations/active`,
  }).then(({ data }) => data)

export const useGetActiveReservations = () => {
  return useQuery({
    queryKey: ['get.active-reservations'],
    queryFn: getActiveReservations,
  })
}
