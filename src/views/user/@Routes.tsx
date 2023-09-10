import { Route } from 'react-router-dom'
import { routes } from '../../app/router'
import { lazy } from 'react'
import RequireAuth from '../../app/router/user/RequireAuth.tsx'
import { TemplateUserView } from '../../templates/TemplateUserView.tsx'

const VUserPanel = lazy(()=>import('./dashboard/VUserPanel.tsx'))
const VDropzone = lazy(()=>import('./imageDropzone/ImageDropzone.tsx'))
const VCars = lazy(()=>import('./cars/VCars.tsx'))
const VCar = lazy(()=>import('./cars/VCar.tsx'))
export const UserRoutes=[
  <Route key={routes['user-panel']} path={routes['user-panel']} element={<RequireAuth><TemplateUserView/></RequireAuth>}>
    <Route index element= {<VUserPanel/>}/>
    <Route key={routes['user-panel.dropzone']} path={routes['user-panel.dropzone']} element= {<VDropzone/>}/>
    <Route key={routes['user-panel.cars']} path={routes['user-panel.cars']} element= {<VCars/>}/>
    <Route key={routes['user-panel.car']()} path={routes['user-panel.car']()} element= {<VCar/>}/>
  </Route>
]
