import { TReservation } from '../../../app/api/user/reservations/getReservations.ts'
import { Table } from '../../common/Table/Table.tsx'
import { Badge, Text } from '@mantine/core'
import * as dayjs from 'dayjs'
import { BsArchive } from 'react-icons/bs'
import { useMutation } from 'react-query'
import { putReservationFinish } from '../../../app/api/user/reservations/putReservationFinish.ts'
import { getBadgeColor } from '../../../app/utils/getBadgeColor.ts'

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
  const finishReservationMutation = useMutation(putReservationFinish, {
    onSuccess: () => console.log('Poszło'),
    onError: () => console.log('Jakis błąd'),
  })

  return (
    <Table.Container columns={headers} importantIndex={[0]}>
      {reservations.map((item) => (
        <Table.Row key={item.id}>
          <Text>{item.user.username}</Text>
          <Text>{item.car.model}</Text>
          <Badge
            radius={'sm'}
            color={getBadgeColor('reservation-status', item.reservationStatus.code)}
          >
            {item.reservationStatus.name}
          </Badge>
          <Text>{dayjs(item.startTime).format('DD-MM-YYYY')}</Text>
          <Text>{dayjs(item.endTime).format('DD-MM-YYYY')}</Text>
          <Table.Controls>
            <Table.Button.Pure
              name={'Archiwizuj'}
              onClick={() => finishReservationMutation.mutateAsync(item.id)}
              icon={<BsArchive />}
            />
          </Table.Controls>
        </Table.Row>
      ))}
    </Table.Container>
  )
}

export default DasboardAllReservationsDatatable
