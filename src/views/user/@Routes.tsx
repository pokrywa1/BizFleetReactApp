import { Route } from 'react-router-dom'
import { routes } from '../../app/router'
import { lazy } from 'react'
import RequireAuth from '../../app/router/user/RequireAuth.tsx'
import { TemplateUserView } from '../../templates/TemplateUserView.tsx'
import RequireAdmin from "../../app/router/user/RequireAdmin.tsx"

const VUserPanel = lazy(()=>import('./dashboard/VUserPanel.tsx'))
const VCars = lazy(()=>import('./cars/VCars.tsx'))
const VCar = lazy(()=>import('./cars/VCar.tsx'))
const VMembers = lazy(()=>import('./organization/VOrganizationMembers.tsx'))
const VOrganizationMember = lazy(()=>import('./organization/VOrganizationMember.tsx'))
const VUserPanelSettings = lazy(()=>import('./settings/VUserPanelSettings.tsx'))
export const UserRoutes=[
  <Route key={routes['user-panel']} path={routes['user-panel']} element={<RequireAuth><TemplateUserView/></RequireAuth>}>
    <Route index element= {<VUserPanel/>}/>
    <Route key={routes['user-panel.dashboard']} path={routes['user-panel.dashboard']} element= {<VUserPanel/>}/>
    <Route key={routes['user-panel.cars']} path={routes['user-panel.cars']} element= {<VCars/>}/>
    <Route key={routes['user-panel.car']()} path={routes['user-panel.car']()} element= {<VCar/>}/>
    <Route key={routes['user-panel.members']} path={routes['user-panel.members']} element= {<RequireAdmin/>}>
      <Route index element= {<VMembers/>}/>
      <Route key={routes['user-panel.member']()} path={routes['user-panel.member']()} element= {<VOrganizationMember/>}/>
    </Route>
    <Route key={routes['user-panel.settings']} path={routes['user-panel.settings']} element= {<VUserPanelSettings/>}/>
  </Route>
]
