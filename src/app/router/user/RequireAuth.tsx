import { Suspense } from 'react'
import useUserStore from '../../store/useUserStore.ts'
import { Navigate } from 'react-router-dom'
import { routes } from '../index.tsx'
import AppBarLoader from '../../../components/common/AppBarLoader.tsx'

type RequireAuthProps = {
  children: React.ReactNode
}
const RequireAuth = ({ children }: RequireAuthProps) => {
  const { user } = useUserStore()
  if (user) {
    return <Suspense fallback={<AppBarLoader />}>{children}</Suspense>
  }
  return <Navigate to={routes['auth.login']} />
}

export default RequireAuth
