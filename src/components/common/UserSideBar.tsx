import {
  Navbar,
  Tooltip,
  UnstyledButton,
  createStyles,
  Stack,
  rem,
  Avatar,
  Group,
} from '@mantine/core'
import { BiLogOut, BiSolidDashboard } from 'react-icons/bi'
import { AiFillCar, AiFillSetting } from 'react-icons/ai'

import { IconType } from 'react-icons'
import { HEADER_HEIGHT, NAVBAR_WIDTH } from '../../templates/userTemplateConsts.ts'
import { IoCarSharp } from 'react-icons/io5'
import { LinkProps, NavLink } from 'react-router-dom'
import { routes } from '../../app/router'
import { BsFillPeopleFill } from 'react-icons/bs'

const useStyles = createStyles((theme) => ({
  link: {
    width: rem(50),
    height: rem(50),
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}))

type NavbarLinkProps = {
  icon: IconType
  label: string
  onClick?(): void
} & LinkProps

function NavbarLink({ icon: Icon, label, onClick, ...props }: NavbarLinkProps) {
  const { classes, cx } = useStyles()
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }} zIndex={10000}>
      <NavLink {...props}>
        {({ isActive }) => (
          <UnstyledButton
            onClick={onClick}
            className={cx(classes.link, { [classes.active]: isActive })}
          >
            <Icon size="1.2rem" />
          </UnstyledButton>
        )}
      </NavLink>
    </Tooltip>
  )
}

const mockdata = [
  { icon: BiSolidDashboard, label: 'Home', to: routes['user-panel.dashboard'] },
  { icon: IoCarSharp, label: 'Flota', to: routes['user-panel.cars'] },
  { icon: BsFillPeopleFill, label: 'Pracownicy', to: routes['user-panel.members'] },
  { icon: AiFillSetting, label: 'Ustaweinia', to: routes['user-panel.settings'] },
]
const UserSideBar = () => {
  const links = mockdata.map((link) => {
    return <NavbarLink {...link} key={link.label} to={link.to} />
  })

  return (
    <Navbar mih={'100%'} width={{ base: NAVBAR_WIDTH }} px="md" pb={'md'}>
      <Navbar.Section style={{ height: HEADER_HEIGHT }}>
        <Group align={'center'} position={'center'} h={HEADER_HEIGHT}>
          <Avatar color={'blue'} variant={'outline'} radius={'xl'} style={{ color: 'white' }}>
            <AiFillCar />
          </Avatar>
        </Group>
      </Navbar.Section>
      <Navbar.Section grow mt={'xs'}>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
          <NavbarLink icon={BiLogOut} label="Logout" to={routes['index']} />
        </Stack>
      </Navbar.Section>
    </Navbar>
  )
}

export default UserSideBar
