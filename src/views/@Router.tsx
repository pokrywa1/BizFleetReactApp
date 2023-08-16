import { Routes } from 'react-router-dom'
import { PublicRoutes } from './public/@Routes.tsx'

export const AppRouter = () => {
  return <Routes>{PublicRoutes}</Routes>
}
