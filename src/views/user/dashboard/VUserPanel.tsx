import {
  TReservation,
  useGetReservations,
} from '../../../app/api/user/reservations/getReservations.ts'
import UserCurrentReservationsList from '../../../components/user/dashboard/UserCurrentReservationsList.tsx'
import Title from '../../../components/common/Typography/Title.tsx'
import { QueryWrapper } from '../../../app/Query/Query.tsx'
import { Stack } from '@mantine/core'
import DasboardAllReservationsDatatable from '../../../components/user/dashboard/DasboardAllReservationsDatatable.tsx'
import { useGetActiveReservations } from '../../../app/api/user/reservations/getActiveReservation.ts'

const VUserPanel = () => {
  const activeQueryData = useGetActiveReservations()
  const queryData = useGetReservations()

  return (
    <>
      <Stack spacing={'lg'}>
        <div>
          <Title order={2}>Aktualne wypożyczenia</Title>
          <QueryWrapper query={activeQueryData}>
            {(data: TReservation[]) => <UserCurrentReservationsList reservations={data} />}
          </QueryWrapper>
        </div>
        <div>
          <Title order={2}>Pozostałe rezerwacje</Title>
          <QueryWrapper query={queryData}>
            {(data: TReservation[]) => <DasboardAllReservationsDatatable reservations={data} />}
          </QueryWrapper>
        </div>
      </Stack>
    </>
  )
}

export default VUserPanel
