import { Route } from 'react-router-dom'
import { routes } from '../../../app/router'
import { lazy } from 'react'

const VLogin = lazy(()=>import('./VSignIn.tsx'))
export const AuthRoutes = [
  <Route path={routes['auth.login']} key={routes['auth.login']} element={<VLogin/>}/>,
]
