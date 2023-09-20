import useUserStore from '../../../app/store/useUserStore.ts'
import React from 'react'

type RequireAdminProps = {
  children: React.ReactNode
}
export const RequireAdmin = ({ children }: RequireAdminProps) => {
  const { user } = useUserStore()
  return user?.role === 'admin' ? children : null
}
