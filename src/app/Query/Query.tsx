import { UseQueryResult } from 'react-query'
import { ReactNode } from 'react'
import { Stack, Text, useMantineTheme } from '@mantine/core'

export type QueryWrapperProps<T> = {
  query: UseQueryResult<T>
  children: ((_data: T) => ReactNode | ReactNode[]) | ReactNode
}

export const QueryWrapper = <T,>({ query, children }: QueryWrapperProps<T>) => {
  const theme = useMantineTheme()

  if (!query) throw new Error('Missing query data')
  if (query.isLoading)
    return (
      <Text fz={'sm'} color={theme.colorScheme === 'dark' ? 'gray.5' : 'gray'}>
        Ładowanie
      </Text>
    )
  if (query.isError)
    return (
      <Text fz={'sm'} color={theme.colorScheme === 'dark' ? 'gray.5' : 'gray'}>
        Błąd wczytywania danych
      </Text>
    )
  else {
    if (
      query.data &&
      ((Array.isArray(query.data) && query.data.length > 0) || Object.keys(query.data).length > 0)
    )
      return <Stack>{children instanceof Function ? children(query.data) : children}</Stack>
    else
      return (
        <Text fz={'sm'} color={theme.colorScheme === 'dark' ? 'gray.5' : 'gray'}>
          Brak informacji
        </Text>
      )
  }
}
