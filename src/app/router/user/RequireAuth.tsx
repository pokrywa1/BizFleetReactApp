import { Suspense } from 'react'
import useUserStore from '../../store/useUserStore.ts'
import { Navigate, Outlet } from 'react-router-dom'
import { routes } from '../index.tsx'
import AppBarLoader from '../../../components/common/AppBarLoader.tsx'

const RequireAuth = () => {
  const { accessToken } = useUserStore()
  if (accessToken) {
    return (
      <Suspense fallback={<AppBarLoader />}>
        <Outlet />
      </Suspense>
    )
  }
  return <Navigate to={routes['auth.login']} />
}

export default RequireAuth
