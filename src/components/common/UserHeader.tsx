import { Avatar, Group, Header } from '@mantine/core'
import { HEADER_HEIGHT } from '../../templates/userTemplateConsts.ts'

const UserHeader = () => {
  return (
    <Header height={HEADER_HEIGHT} px={'md'}>
      <Group style={{ height: '100%' }} position={'right'} align={'center'}>
        <Avatar radius="xl" />
      </Group>
    </Header>
  )
}

export default UserHeader
