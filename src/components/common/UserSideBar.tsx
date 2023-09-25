import { useState } from 'react'
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
import { AiFillCar } from 'react-icons/ai'

import { IconType } from 'react-icons'
import { HEADER_HEIGHT, NAVBAR_WIDTH } from '../../templates/userTemplateConsts.ts'
import { IoCarSharp } from 'react-icons/io5'
import { Link, LinkProps } from 'react-router-dom'
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
  active?: boolean
  onClick?(): void
} & LinkProps

function NavbarLink({ icon: Icon, label, active, onClick, ...props }: NavbarLinkProps) {
  const { classes, cx } = useStyles()
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }} zIndex={10000}>
      <Link {...props}>
        <UnstyledButton
          onClick={onClick}
          className={cx(classes.link, { [classes.active]: active })}
        >
          <Icon size="1.2rem" />
        </UnstyledButton>
      </Link>
    </Tooltip>
  )
}

const mockdata = [
  { icon: BiSolidDashboard, label: 'Home', to: routes['user-panel'] },
  { icon: IoCarSharp, label: 'Flota', to: routes['user-panel.cars'] },
  { icon: BsFillPeopleFill, label: 'Pracownicy', to: routes['user-panel.members'] },
]
const UserSideBar = () => {
  const [active, setActive] = useState(0)

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
      to={link.to}
    />
  ))

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
