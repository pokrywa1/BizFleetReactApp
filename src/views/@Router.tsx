import { Routes } from 'react-router-dom'
import { PublicRoutes } from './public/@Routes.tsx'
import { Suspense } from 'react'
import AppBarLoader from '../components/common/AppBarLoader.tsx'

export const AppRouter = () => {
  return (
    <Suspense fallback={<AppBarLoader />}>
      <Routes>{PublicRoutes}</Routes>
    </Suspense>
  )
}
