import { PropsWithChildren } from 'react'

export type QueryNoDataProps = PropsWithChildren
const QueryNoData = ({ children }: QueryNoDataProps) => {
  return children ? <>{children}</> : <p>Hej</p>
}

export default QueryNoData
