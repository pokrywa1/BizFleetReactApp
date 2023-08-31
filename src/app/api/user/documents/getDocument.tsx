import axios, { AxiosResponse } from 'axios'
import { API_URL } from '../../../config/env.ts'
import { useQuery } from 'react-query'

export type TDocument = {
  id: string
  url: string
}
export const getDocument = ({ queryKey }): Promise<AxiosResponse<TDocument>['data']> => {
  const [_, documentId] = queryKey

  if (!documentId) new Error('getDocument: documentId is undefined or null')
  return axios({
    method: 'GET',
    url: `${API_URL}/documents/${documentId}`,
  }).then(({ data }) => data)
}

export const useGetDocument = (documentId: string | null) => {
  return useQuery({
    queryKey: ['get.document', documentId],
    queryFn: getDocument,
  })
}
