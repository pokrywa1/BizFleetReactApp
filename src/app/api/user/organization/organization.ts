import axios from 'axios'
import { API_URL } from '../../../config/env.ts'
import { useQuery } from 'react-query'

export type TOrganizationRole = 'admin' | 'user'

export type TOrganization = {
  id: string
  username: string
  fullName: string
  email: string
  role: TOrganizationRole
}
export const getOrganization = () =>
  axios.get<TOrganization[]>(`${API_URL}/organizations`).then(({ data }) => data)

export const useGetOrganization = () =>
  useQuery({
    queryKey: ['get.organization'],
    queryFn: getOrganization,
  })
