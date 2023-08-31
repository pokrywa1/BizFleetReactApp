import { TCar } from './getCars.tsx'
import { TUserAccount } from '../../public/auth/getMe.ts'
import axios, { AxiosResponse } from 'axios'
import { API_URL } from '../../../config/env.ts'
import { useQuery } from 'react-query'

type TCarReservation = {
  id: string
  userId: string
  user: TUserAccount
  carId: string
  car: TCar
  startTime: string
  endTime: string
  reservationStatus: {
    code: string
    name: string
  }
}

export const getCarReservation = (
  carId: string | null,
): Promise<AxiosResponse<TCarReservation[]>['data']> => {
  console.log('hello')
  if (!carId) new Error('getDocument: carId is undefined or null')
  return axios({
    method: 'GET',
    url: `${API_URL}/cars/${carId}/reservations`,
  }).then(({ data }) => data)
}

export const useGetCarReservation = (carId: string | null) => {
  return useQuery({
    queryKey: ['get.car.reservation', carId],
    queryFn: () => getCarReservation(carId),
  })
}
