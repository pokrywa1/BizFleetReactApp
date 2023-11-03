import { useGetOrganizationMember } from '../../../app/api/user/organization/getOrganizationMember.ts'
import { useParams } from 'react-router-dom'
import { QueryWrapper } from '../../../app/Query/Query.tsx'
import { TOrganizationMember } from '../../../app/api/user/organization/getOrganization.ts'
import { OrganizationMemberDetails } from '../../../components/user/organization/member/OrganizationMemberDetails.tsx'
import { useGetOrganizationMemberReservation } from '../../../app/api/user/organization/getOrganizationMemberReservation.ts'

const VOrganizationMember = () => {
  const { memberId } = useParams()
  const memberQueryData = useGetOrganizationMember(memberId)
  const memberReservationQueryData = useGetOrganizationMemberReservation(memberId)
  console.log(memberReservationQueryData)
  return (
    <QueryWrapper query={memberQueryData}>
      {(_data: TOrganizationMember) => <OrganizationMemberDetails member={_data} />}
    </QueryWrapper>
  )
}

export default VOrganizationMember
