import UserSideBar from '../components/common/UserSideBar.tsx'
import UserHeader from '../components/common/UserHeader.tsx'
import { createStyles } from '@mantine/core'
import { NAVBAR_WIDTH } from './userTemplateConsts.ts'
import { Outlet } from 'react-router-dom'

const useStyle = createStyles((theme) => ({
  sideBarContainer: {
    display: 'block',
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
  },
  appContainer: {
    display: 'block',
    paddingLeft: NAVBAR_WIDTH + 20,
    paddingRight: 20,
    marginTop: theme.spacing.xl,
    maxWidth: '1440px',
    marginRight: 'auto',
    marginLeft: 'auto',
    boxSizing: 'border-box',
  },
}))
export function TemplateUserView() {
  const { classes } = useStyle()
  return (
    <>
      <UserHeader />
      <div className={classes.sideBarContainer}>
        <UserSideBar />
      </div>
      <div className={classes.appContainer}>
        <Outlet />
      </div>
    </>
  )
}
