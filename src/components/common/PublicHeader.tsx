import { Group, Header, Text } from '@mantine/core'
import ButtonLink from './Buttons/ButtonLink.tsx'
import { routes } from '../../app/router'
import { Link } from 'react-router-dom'

const PublicHeader = () => {
  return (
    <Header height={60}>
      <Group noWrap position="apart" sx={{ height: '100%' }}>
        <Link to={routes['index']}>
          <Text fz={'xl'} fw={'bold'}>
            BizFleet
          </Text>
        </Link>
        <Group position="center">
          <ButtonLink variant={'outline'} to={routes['auth.login']} size="md">
            Logowanie
          </ButtonLink>
          <ButtonLink to={routes['auth.register']} size="md">
            Rejestracja
          </ButtonLink>
        </Group>
      </Group>
    </Header>
  )
}

export default PublicHeader
