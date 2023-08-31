import axios, { AxiosResponse } from 'axios'
import { API_URL } from '../../../config/env.ts'
import { useQuery } from 'react-query'

export type TCar = {
  id: string
  carPhotoId: string | null
  model: string
  licensePlate: string
  year: number
}
export const getCars = (): Promise<AxiosResponse<TCar[]>['data']> =>
  axios({
    method: 'GET',
    url: `${API_URL}/cars`,
  }).then(({ data }) => data)

export const useGetCars = () => {
  return useQuery({
    queryKey: ['get.cars'],
    queryFn: getCars,
  })
}
