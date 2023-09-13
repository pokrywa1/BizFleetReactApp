import { Avatar, Group, Header, Stack, Text } from '@mantine/core'
import { HEADER_HEIGHT } from '../../templates/userTemplateConsts.ts'
import useUserStore from '../../app/store/useUserStore.ts'

const UserHeader = () => {
  const { user } = useUserStore()
  return (
    <Header height={HEADER_HEIGHT} px={'md'}>
      <Group style={{ height: '100%' }} position={'right'} align={'center'} spacing={'md'}>
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
