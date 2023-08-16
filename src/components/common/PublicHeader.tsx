import { Button, Group, Header, Text } from '@mantine/core'

const PublicHeader = () => {
  return (
    <Header height={60}>
      <Group noWrap position="apart" sx={{ height: '100%' }}>
        <Text fz={'xl'} fw={'bold'}>
          BizFleet
        </Text>
        <Group position="center">
          <Button variant="default">Log in</Button>
          <Button>Sign up</Button>
        </Group>
      </Group>
    </Header>
  )
}

export default PublicHeader
