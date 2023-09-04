import { TReservation } from '../../../app/api/user/reservations/getReservations.ts'
import { Table } from '@mantine/core'
import * as dayjs from 'dayjs'

type DasboardAllReservationsDatatableProps = {
  reservations: TReservation[]
}
const DasboardAllReservationsDatatable = ({
  reservations,
}: DasboardAllReservationsDatatableProps) => {
  const rows = reservations.map((element) => (
    <tr key={element.id}>
      <td>{element.car.model}</td>
      <td>{element.user.fullName}</td>
      <td>{dayjs(element.startTime).format('DD-MM-YYYY')}</td>
      <td>{dayjs(element.endTime).format('DD-MM-YYYY')}</td>
      <td>{element.reservationStatus.name}</td>
    </tr>
  ))
  return (
    <Table mt={20}>
      <thead>
        <tr>
          <th>Samochód</th>
          <th>Pracownik</th>
          <th>Data Od</th>
          <th>Do</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  )
}

export default DasboardAllReservationsDatatable
