import {
  TReservation,
  useGetReservations,
} from '../../../app/api/user/reservations/getReservations.ts'
import { Table } from '../../common/Table/Table.tsx'
import { Badge, Text } from '@mantine/core'
import * as dayjs from 'dayjs'
import { putReservationFinish } from '../../../app/api/user/reservations/putReservationFinish.ts'
import { getBadgeColor } from '../../../app/utils/getBadgeColor.ts'
import { putReservationCancel } from '../../../app/api/user/reservations/putReservationCancel.ts'
import { AnchorLink } from '../../common/Typography/AnchorLink.tsx'
import { routes } from '../../../app/router'
import useUserStore from '../../../app/store/useUserStore.ts'
import { GiConfirmed } from 'react-icons/gi'

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
  const { user } = useUserStore()
  const { refetch } = useGetReservations()

  return (
    <>
      <Table.Container columns={headers} importantIndex={[0]}>
        {reservations.map((item) => (
          <>
            <Table.Row key={item.id}>
              {user ? (
                <AnchorLink to={routes['user-panel.member'](item.userId)}>
                  {item.user.username}
                </AnchorLink>
              ) : (
                <Text>{item.user.username}</Text>
              )}

              <AnchorLink to={routes['user-panel.car'](item.carId)}>{item.car.model}</AnchorLink>
              <Badge
                radius={'sm'}
                color={getBadgeColor('reservation-status', item.reservationStatus.code)}
              >
                {item.reservationStatus.name}
              </Badge>
              <Text>{dayjs(item.startTime).format('DD-MM-YYYY')}</Text>
              <Text>{dayjs(item.endTime).format('DD-MM-YYYY')}</Text>
              <Table.Controls>
                {item.reservationStatus.code === 'Reserved' && (
                  <Table.Button.Delete
                    mutationFn={putReservationCancel}
                    mutationArgs={item.id}
                    onSuccess={() => {
                      refetch()
                    }}
                  />
                )}
                {item.reservationStatus.code === 'Active' && (
                  <Table.Button.Delete
                    mutationFn={putReservationFinish}
                    mutationArgs={item.id}
                    onSuccess={() => {
                      refetch()
                    }}
                    mobileText={'zakończ'}
                    buttonColor={'green'}
                    buttonIcon={GiConfirmed}
                    modalProps={{
                      submitButtonColor: 'green',
                      submitButtonText: 'Zakońćz',
                    }}
                    title={'Czy na pewno chcesz zakończyć przejazd?'}
                  />
                )}
              </Table.Controls>
            </Table.Row>
          </>
        ))}
      </Table.Container>
    </>
  )
}

export default DasboardAllReservationsDatatable
