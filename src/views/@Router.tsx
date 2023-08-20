import { Routes } from 'react-router-dom'
import { PublicRoutes } from './public/@Routes.tsx'
import { Suspense } from 'react'
import AppBarLoader from '../components/common/AppBarLoader.tsx'
import { UserRoutes } from './user/@Routes.tsx'

export const AppRouter = () => {
  return (
    <Suspense fallback={<AppBarLoader />}>
      <Routes>
        {PublicRoutes}
        {UserRoutes}
      </Routes>
    </Suspense>
  )
}
