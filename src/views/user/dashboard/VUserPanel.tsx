import { useGetReservations } from '../../../app/api/user/reservations/getReservations.ts'
import UserCurrentReservationsList from '../../../components/user/dashboard/UserCurrentReservationsList.tsx'
import { Text } from '@mantine/core'

const VUserPanel = () => {
  const data = useGetReservations()

  return data.isSuccess && data.data.length > 0 ? (
    <UserCurrentReservationsList reservations={data.data} />
  ) : (
    <Text>Brak Aktualnie wypożyczonych samochodów</Text>
  )
}

export default VUserPanel
