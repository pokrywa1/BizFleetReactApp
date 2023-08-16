import { Route } from 'react-router-dom'
import { routes } from '../../app/router'
import { lazy } from 'react'
import { AuthRoutes } from './auth/@Routes.tsx'

const VLanding = lazy(()=>import('./VLanding.tsx'))
export const PublicRoutes=[
  <Route key={routes['index'] } path={routes['index']}>
    <Route index element={<VLanding />} />
    {AuthRoutes}
  </Route>
]
