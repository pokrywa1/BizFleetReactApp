import { UseQueryResult } from 'react-query'
import { ReactNode } from 'react'
import { Stack } from '@mantine/core'

export type QueryWrapperProps<T> = {
  query: UseQueryResult<T>
  children: ((_data: T) => ReactNode | ReactNode[]) | ReactNode
}

export const QueryWrapper = <T,>({ query, children }: QueryWrapperProps<T>) => {
  console.log(query.data)
  if (!query) throw new Error('Missing query data')
  if (query.isLoading) return <p>Ładowanie</p>
  if (query.isError) return <p>Błąd</p>
  else {
    if (
      query.data &&
      ((Array.isArray(query.data) && query.data.length > 0) || Object.keys(query.data).length > 0)
    )
      return <Stack>{children instanceof Function ? children(query.data) : children}</Stack>
  }
}
