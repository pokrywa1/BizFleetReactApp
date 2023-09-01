import { ReactNode } from 'react'
import { QueryWrapperProps } from './Query.tsx'
import { Stack } from '@mantine/core'

export type QueryDataProps<T> = {
  children: ((_data: T) => ReactNode | ReactNode[]) | ReactNode
} & QueryWrapperProps<T>
const QueryData = <T,>({ children, query }: QueryDataProps<T>) => {
  if (!query) throw new Error('Missing query data')
  if (query.data) {
    return <Stack>{children instanceof Function ? children(query.data) : children}</Stack>
  }
  return null
}

export default QueryData
