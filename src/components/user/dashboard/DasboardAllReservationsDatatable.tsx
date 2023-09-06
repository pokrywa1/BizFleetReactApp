import { TReservation } from '../../../app/api/user/reservations/getReservations.ts'
import { Table } from '../../common/Table/Table.tsx'
import { Text } from '@mantine/core'

type DasboardAllReservationsDatatableProps = {
  reservations: TReservation[]
}

export type TTableHeader = {
  name: string
}[]

const headers: TTableHeader = [
  {
    name: 'Imie',
  },
  {
    name: 'Nazwisko',
  },
  {
    name: 'Nazwisko',
  },
]
const DasboardAllReservationsDatatable = ({
  reservations,
}: DasboardAllReservationsDatatableProps) => {
  return (
    <Table.Container columns={headers} importantIndex={[1, 2]}>
      <Table.Row>
        <Text>hej</Text>
        <Text>hej</Text>
        <Text>hej</Text>
      </Table.Row>
      <Table.Row>
        <Text>hej</Text>
        <Text>hej</Text>
        <Text>hej</Text>
      </Table.Row>
    </Table.Container>
  )
}

export default DasboardAllReservationsDatatable
