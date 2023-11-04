import axios, { AxiosResponse } from 'axios'
import { TReservation } from '../reservations/getReservations.ts'
import { API_URL } from '../../../config/env.ts'
import { useQuery } from 'react-query'

export const getOrganizationMemberReservation = (
  userId: string | undefined,
): Promise<AxiosResponse<TReservation[]>['data']> => {
  if (!userId) new Error('getOrganizationMemberReservation: userId is undefined or null')
  return axios({
    method: 'GET',
    url: `${API_URL}/organizations/members/${userId}/reservations`,
  }).then(({ data }) => data)
}

export const useGetOrganizationMemberReservation = (userId: string | undefined) =>
  useQuery({
    queryKey: ['get.member.reservations', userId],
    queryFn: () => getOrganizationMemberReservation(userId),
  })
