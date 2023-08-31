import { Route } from 'react-router-dom'
import { routes } from '../../app/router'
import { lazy } from 'react'
import RequireAuth from '../../app/router/user/RequireAuth.tsx'
import { TemplateUserView } from '../../templates/TemplateUserView.tsx'

const VUserPanel = lazy(()=>import('./dashboard/VUserPanel.tsx'))
const VDropzone = lazy(()=>import('./imageDropzone/ImageDropzone.tsx'))
export const UserRoutes=[
  <Route key={routes['user-panel']} path={routes['user-panel']} element={<RequireAuth><TemplateUserView/></RequireAuth>}>
    <Route index element= {<VUserPanel/>}/>
    <Route key={routes['user-panel.dropzone']} path={routes['user-panel.dropzone']} element= {<VDropzone/>}/>
  </Route>
]
