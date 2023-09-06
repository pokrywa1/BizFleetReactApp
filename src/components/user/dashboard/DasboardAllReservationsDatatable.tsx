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
    name: 'Tytuł',
  },
  {
    name: 'Samochód',
  },
]
const DasboardAllReservationsDatatable = ({
  reservations,
}: DasboardAllReservationsDatatableProps) => {
  return (
    <Table.Container columns={headers} importantIndex={[0]}>
      <Table.Row>
        <Text>Ola</Text>
        <Text>Olowska</Text>
        <Text>Pracownik</Text>
        <Text>Opel</Text>
      </Table.Row>
      <Table.Row>
        <Text>Hubert</Text>
        <Text>Hubertowski</Text>
        <Text>Admin</Text>
        <Text>Ford</Text>
      </Table.Row>
    </Table.Container>
  )
}

export default DasboardAllReservationsDatatable
