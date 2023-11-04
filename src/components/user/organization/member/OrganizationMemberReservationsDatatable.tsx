import { TReservation } from '../../../../app/api/user/reservations/getReservations.ts'
import { TTableHeader } from '../../dashboard/DasboardAllReservationsDatatable.tsx'
import { Table } from '../../../common/Table/Table.tsx'
import { AnchorLink } from '../../../common/Typography/AnchorLink.tsx'
import { routes } from '../../../../app/router'
import { Badge } from '@mantine/core'
import { getBadgeColor } from '../../../../app/utils/getBadgeColor.ts'
import * as dayjs from 'dayjs'
import { Text } from '../../../common/Typography/Text.tsx'

type OrganizationMemberReservationsDatatableProps = {
  reservations: TReservation[]
}

const columns: TTableHeader = [
  {
    name: 'Pojazd',
  },
  {
    name: 'Status',
  },
  {
    name: 'Od',
  },
  {
    name: 'Do',
  },
]
export const OrganizationMemberReservationsDatatable = ({
  reservations,
}: OrganizationMemberReservationsDatatableProps) => {
  return (
    <Table.Container columns={columns} importantIndex={[0]}>
      {reservations.map((item) => (
        <Table.Row>
          <AnchorLink to={routes['user-panel.car'](item.carId)}>{item.car.model}</AnchorLink>
          <Badge
            radius={'sm'}
            color={getBadgeColor('reservation-status', item.reservationStatus.code)}
          >
            {item.reservationStatus.name}
          </Badge>
          <Text>{dayjs(item.startTime).format('DD-MM-YYYY')}</Text>
          <Text>{dayjs(item.endTime).format('DD-MM-YYYY')}</Text>
        </Table.Row>
      ))}
    </Table.Container>
  )
}
