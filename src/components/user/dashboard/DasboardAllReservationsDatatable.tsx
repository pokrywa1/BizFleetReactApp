import { TReservation } from '../../../app/api/user/reservations/getReservations.ts'
import { Table } from '../../common/Table/Table.tsx'
import { Badge, Text } from '@mantine/core'
import * as dayjs from 'dayjs'
import { BsArchive } from 'react-icons/bs'
import { useMutation } from 'react-query'
import { putReservationFinish } from '../../../app/api/user/reservations/putReservationFinish.ts'
import { getBadgeColor } from '../../../app/utils/getBadgeColor.ts'
import { putReservationCancel } from '../../../app/api/user/reservations/putReservationCancel.ts'
import { ImCancelCircle } from 'react-icons/im'
import { toastError } from '../../../app/utils/toastError.ts'
import { useState } from 'react'
import DeleteModal from '../../common/modals/DeleteModal.tsx'
import { AnchorLink } from '../../common/Typography/AnchorLink.tsx'
import { routes } from '../../../app/router'
import useUserStore from '../../../app/store/useUserStore.ts'

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

  const finishReservationMutation = useMutation(putReservationFinish, {
    onSuccess: () => console.log('Poszło'),
    onError: () => toastError('Nie udało się zakończyć przejazdu'),
  })
  const cancelReservationMutation = useMutation(putReservationCancel, {
    onSuccess: () => console.log('Poszło'),
    onError: () => toastError('Nie udało się anulować rezerwacji'),
  })

  const [openedFinishModal, setOpenedFinishModal] = useState(false)
  const [openedCancelModal, setOpenedCancelModal] = useState(false)

  return (
    <>
      <Table.Container columns={headers} importantIndex={[0]}>
        {reservations.map((item) => (
          <>
            <Table.Row key={item.id}>
              {user ? (
                <AnchorLink to={routes['user-panel.car'](item.userId)}>
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
                  <Table.Button.Pure
                    name={'Anuluj'}
                    onClick={() => cancelReservationMutation.mutateAsync(item.id)}
                    color={'red'}
                    icon={<ImCancelCircle />}
                  />
                )}
                {item.reservationStatus.code === 'Active' && (
                  <Table.Button.Pure
                    name={'Zakończ'}
                    onClick={() => finishReservationMutation.mutateAsync(item.id)}
                    icon={<BsArchive />}
                  />
                )}
              </Table.Controls>
            </Table.Row>
            <DeleteModal
              onConfirm={() => cancelReservationMutation.mutateAsync(item.id)}
              opened={openedCancelModal}
              onClose={() => setOpenedCancelModal(false)}
              title={'Anulacja rezerwacji'}
            />
            <DeleteModal
              onConfirm={() => finishReservationMutation.mutateAsync(item.id)}
              opened={openedFinishModal}
              onClose={() => setOpenedFinishModal(false)}
              title={'Kończenie przejazdu'}
              submitButtonText={'Zakończ'}
              submitButtonColor={'green'}
            />
          </>
        ))}
      </Table.Container>
    </>
  )
}

export default DasboardAllReservationsDatatable
