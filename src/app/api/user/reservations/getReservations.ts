import axios, { AxiosResponse } from 'axios'
import { API_URL } from '../../../config/env.ts'
import { useQuery } from 'react-query'

type TUser = {
  id: string
  username: string
  fullName: string
}
type TCar = {
  id: string
  licensePlate: string
  model: string
  year: string
  carPhotoId: string
}

export type ReservationStatusCode = 'Cancelled' | 'Finished' | 'Reserved' | 'Active'

type ReservationStatus = {
  code: ReservationStatusCode
  name: string
}

export type TReservation = {
  id: string
  userId: string
  user: TUser
  carId: string
  startTime: string
  endTime: string
  reservationStatus: ReservationStatus
  car: TCar
}

export const getReservations = (): Promise<AxiosResponse<TReservation[]>['data']> =>
  axios({
    method: 'GET',
    url: `${API_URL}/car-reservations`,
  }).then(({ data }) => data)

export const useGetReservations = () => {
  return useQuery({
    queryKey: ['get.reservations'],
    queryFn: getReservations,
  })
}
