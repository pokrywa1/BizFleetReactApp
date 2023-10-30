import { useParams } from 'react-router-dom'
import { useGetCarReservation } from '../../../../app/api/user/cars/getCarReservation.ts'
import { Table } from '../../../common/Table/Table.tsx'
import { TTableHeader } from '../../dashboard/DasboardAllReservationsDatatable.tsx'
import { Badge, Text } from '@mantine/core'
import * as dayjs from 'dayjs'
import { getBadgeColor } from '../../../../app/utils/getBadgeColor.ts'

const headers: TTableHeader = [
  {
    name: 'Pracownik',
  },
  {
    name: 'Od',
  },
  {
    name: 'Do',
  },
  {
    name: 'Status',
  },
]
export const CarReservationHistoryDatatable = () => {
  const { carId } = useParams()
  const { data } = useGetCarReservation(carId)

  return (
    <Table.Container columns={headers} importantIndex={[0]}>
      {data &&
        data.length > 0 &&
        data.map((item) => (
          <Table.Row key={item.id}>
            <Text>{item.user.fullName}</Text>
            <Text>{dayjs(item.startTime).format('DD-MM-YYYY')}</Text>
            <Text>{dayjs(item.endTime).format('DD-MM-YYYY')}</Text>
            <Badge
              radius={'sm'}
              color={getBadgeColor('reservation-status', item.reservationStatus.code)}
            >
              {item.reservationStatus.name}
            </Badge>
          </Table.Row>
        ))}
    </Table.Container>
  )
}

