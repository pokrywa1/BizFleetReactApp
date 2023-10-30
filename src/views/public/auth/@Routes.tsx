import { Route } from 'react-router-dom'
import { routes } from '../../../app/router'
import { lazy } from 'react'

const VLogin = lazy(()=>import('./VSignIn.tsx'))
const VSignUp = lazy(()=>import('./VSignUp.tsx'))
export const AuthRoutes = [
  <Route path={routes['auth.login']} key={routes['auth.login']} element={<VLogin/>}/>,
  <Route path={routes['auth.register']} key={routes['auth.register']} element={<VSignUp/>}/>,
]
