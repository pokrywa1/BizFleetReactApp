import {
  TReservation,
  useGetReservations,
} from '../../../app/api/user/reservations/getReservations.ts'
import UserCurrentReservationsList from '../../../components/user/dashboard/UserCurrentReservationsList.tsx'
import Title from '../../../components/common/Typography/Title.tsx'
import { QueryWrapper } from '../../../app/Query/Query.tsx'

const VUserPanel = () => {
  const queryData = useGetReservations()

  return (
    <>
      <Title order={2}>Aktualne wypożyczenia</Title>
      <QueryWrapper query={queryData}>
        {(data: TReservation[]) => <UserCurrentReservationsList reservations={data} />}
      </QueryWrapper>
    </>
  )
}

export default VUserPanel
