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
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles()
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon size="1.2rem" />
      </UnstyledButton>
    </Tooltip>
  )
}

const mockdata = [{ icon: BiSolidDashboard, label: 'Home' }]
const UserSideBar = () => {
  const [active, setActive] = useState(0)

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
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
          <NavbarLink icon={BiLogOut} label="Logout" />
        </Stack>
      </Navbar.Section>
    </Navbar>
  )
}

export default UserSideBar
