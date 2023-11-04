import useUserStore from '../../store/useUserStore.ts'
import { Navigate, Outlet } from 'react-router-dom'
import { routes } from '../index.tsx'

const RequireAdmin = () => {
  const { user } = useUserStore()
  return user?.role === 'admin' ? <Outlet /> : <Navigate to={routes['user-panel.dashboard']} />
}

export default RequireAdmin
