import axios from 'axios'
import { API_URL } from '../../../config/env.ts'
import { useQuery } from 'react-query'

export const getCar = (carId: string | undefined) => {
  if (!carId) return new Error('getCar: carId is undefined or null')
  return axios({
    method: 'GET',
    url: `${API_URL}/cars/${carId}`,
  }).then(({ data }) => data)
}

export const useGetCar = (carId: string | undefined) =>
  useQuery({
    queryKey: ['get.car', carId],
    queryFn: () => getCar(carId),
  })
