import { TReservation } from '../../../app/api/user/reservations/getReservations.ts'
import { Table } from '../../common/Table/Table.tsx'
import { Badge, Text } from '@mantine/core'
import * as dayjs from 'dayjs'
import { Button } from '../../common/Buttons/Button.tsx'

type DasboardAllReservationsDatatableProps = {
  reservations: TReservation[]
}

export type TTableHeader = {
  name: string
}[]

const headers: TTableHeader = [
  {
    name: 'Pracownik',
  },
  {
    name: 'Samochód',
  },
  {
    name: 'Status',
  },
  {
    name: 'Od',
  },
  { name: 'Do' },
  { name: '' },
]
const DasboardAllReservationsDatatable = ({
  reservations,
}: DasboardAllReservationsDatatableProps) => {
  return (
    <Table.Container columns={headers} importantIndex={[0]}>
      {reservations.map((item) => (
        <Table.Row key={item.id}>
          <Text>{item.user.username}</Text>
          <Text>{item.car.model}</Text>
          <Badge radius={'sm'}>{item.reservationStatus.name}</Badge>
          <Text>{dayjs(item.startTime).format('DD-MM-YYYY')}</Text>
          <Text>{dayjs(item.endTime).format('DD-MM-YYYY')}</Text>
          <Table.Controls>
            <Button>Hej</Button>
            <Button>Action</Button>
          </Table.Controls>
        </Table.Row>
      ))}
    </Table.Container>
  )
}

export default DasboardAllReservationsDatatable
