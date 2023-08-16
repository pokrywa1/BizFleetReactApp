import { Container } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import PublicHeader from '../components/common/PublicHeader.tsx'
import { Suspense } from 'react'
import AppBarLoader from '../components/common/AppBarLoader.tsx'

export function TemplatePublicView() {
  return (
    <>
      <Container pb={'xs'}>
        <PublicHeader />
      </Container>
      <Container>
        <Suspense fallback={<AppBarLoader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  )
}
