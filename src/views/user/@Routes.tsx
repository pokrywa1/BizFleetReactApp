import { Route } from 'react-router-dom'
import { routes } from '../../app/router'
import { lazy } from 'react'
import RequireAuth from '../../app/router/user/RequireAuth.tsx'

const VUserPanel = lazy(()=>import('./VUserPanel.tsx'))
export const UserRoutes=[
  <Route key={routes['user-panel']} path={routes['user-panel']} element={<RequireAuth/>}>
    <Route index element= {<VUserPanel/>}/>
  </Route>
]
