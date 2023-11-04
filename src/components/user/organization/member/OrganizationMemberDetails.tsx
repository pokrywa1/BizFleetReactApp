import { TOrganizationMember } from '../../../../app/api/user/organization/getOrganization.ts'
import { OrganizationMemberEssentialData } from './OrganizationMemberEssentialData.tsx'
import { useGetOrganizationMemberReservation } from '../../../../app/api/user/organization/getOrganizationMemberReservation.ts'
import { useParams } from 'react-router-dom'
import QueryData from '../../../../app/Query/QueryData.tsx'
import { OrganizationMemberReservationsDatatable } from './OrganizationMemberReservationsDatatable.tsx'

type OrganizationMemberDetailsProps = {
  member: TOrganizationMember
}

export const OrganizationMemberDetails = ({ member }: OrganizationMemberDetailsProps) => {
  const { memberId } = useParams()
  const memberReservationQueryData = useGetOrganizationMemberReservation(memberId)

  return (
    <>
      <OrganizationMemberEssentialData member={member} />
      <QueryData query={memberReservationQueryData}>
        {(_data) => <OrganizationMemberReservationsDatatable reservations={_data} />}
      </QueryData>
    </>
  )
}
