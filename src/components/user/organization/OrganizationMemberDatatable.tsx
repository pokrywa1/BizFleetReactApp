import { TOrganizationMember } from '../../../app/api/user/organization/getOrganization.ts'
import { TTableHeader } from '../dashboard/DasboardAllReservationsDatatable.tsx'
import { Table } from '../../common/Table/Table.tsx'
import { Badge, Text } from '@mantine/core'
import { getBadgeColor } from '../../../app/utils/getBadgeColor.ts'
import { AnchorLink } from '../../common/Typography/AnchorLink.tsx'
import { routes } from '../../../app/router'

type OrganizationMemberDatatableProps = {
  members: TOrganizationMember[]
}

const columns: TTableHeader = [
  {
    name: 'Imie',
  },
  {
    name: 'E-mail',
  },
  {
    name: 'Rola',
  },
]
export const OrganizationMemberDatatable = ({ members }: OrganizationMemberDatatableProps) => {
  return (
    <>
      <Table.Container columns={columns} importantIndex={[1]}>
        {members.map((item) => (
          <Table.Row key={item.username}>
            <Text>
              <AnchorLink to={routes['user-panel.member'](item.id)}>{item.fullName}</AnchorLink>
            </Text>
            <Text>{item.email}</Text>
            <Badge color={getBadgeColor('organization-member', item.role)}>{item.role}</Badge>
          </Table.Row>
        ))}
      </Table.Container>
    </>
  )
}
