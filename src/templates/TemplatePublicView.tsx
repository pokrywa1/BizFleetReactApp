import { Container } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import PublicHeader from '../components/common/PublicHeader.tsx'

export function TemplatePublicView() {
  return (
    <>
      <Container pb={'xs'}>
        <PublicHeader />
      </Container>
      <Container>
        <Outlet />
      </Container>
    </>
  )
}
