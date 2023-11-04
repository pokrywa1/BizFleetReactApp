import {
  Avatar,
  Group,
  Header,
  Stack,
  Switch,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import { HEADER_HEIGHT } from '../../templates/userTemplateConsts.ts'
import useUserStore from '../../app/store/useUserStore.ts'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { useState } from 'react'

const UserHeader = () => {
  const [checkedTheme, setCheckedTheme] = useState(false)

  const { user } = useUserStore()

  const theme = useMantineTheme()
  const { toggleColorScheme } = useMantineColorScheme()

  return (
    <Header height={HEADER_HEIGHT} px={'md'}>
      <Group style={{ height: '100%' }} position={'right'} align={'center'} spacing={'md'}>
        <Switch
          checked={checkedTheme}
          size="md"
          color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
          onLabel={<BsFillSunFill size="1rem" stroke={2.5} color={theme.colors.yellow[4]} />}
          offLabel={<BsFillMoonFill size="1rem" stroke={2.5} color={theme.colors.blue[6]} />}
          onChange={(event) => {
            setCheckedTheme(event.currentTarget.checked)
            toggleColorScheme()
          }}
        />

        <Stack spacing={0}>
          <Text truncate maw={100} fz={'sm'}>
            {user?.username}
          </Text>
          <Text truncate maw={100} fz={'xs'} align={'end'} color={'gray'}>
            {user?.role}
          </Text>
        </Stack>
        <Avatar radius="xl" />
      </Group>
    </Header>
  )
}

export default UserHeader
