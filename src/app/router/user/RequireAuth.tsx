import { Suspense } from 'react'
import useUserStore from '../../store/useUserStore.ts'
import { Navigate } from 'react-router-dom'
import { routes } from '../index.tsx'
import AppBarLoader from '../../../components/common/AppBarLoader.tsx'

type RequireAuthProps = {
  children: React.ReactNode
}
const RequireAuth = ({ children }: RequireAuthProps) => {
  const { accessToken } = useUserStore()
  if (accessToken) {
    return <Suspense fallback={<AppBarLoader />}>{children}</Suspense>
  }
  return <Navigate to={routes['auth.login']} />
}

export default RequireAuth
