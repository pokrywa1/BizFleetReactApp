import axios, { AxiosResponse } from 'axios'
import { TOrganizationMember } from './getOrganization.ts'
import { API_URL } from '../../../config/env.ts'
import { useQuery } from 'react-query'

export const getOrganizationMember = (
  userId: string | undefined,
): Promise<AxiosResponse<TOrganizationMember>['data']> => {
  if (!userId) new Error('getOrganizationMember: userId is undefined or null')
  return axios({
    method: 'GET',
    url: `${API_URL}/users/${userId}`,
  }).then(({ data }) => data)
}

export const useGetOrganizationMember = (userId: string | undefined) => {
  return useQuery({
    queryKey: ['get.member', userId],
    queryFn: () => getOrganizationMember(userId),
  })
}
