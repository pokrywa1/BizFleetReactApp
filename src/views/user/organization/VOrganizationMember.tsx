import { useGetOrganizationMember } from '../../../app/api/user/organization/getOrganizationMember.ts'
import { useParams } from 'react-router-dom'
import { QueryWrapper } from '../../../app/Query/Query.tsx'
import { TOrganizationMember } from '../../../app/api/user/organization/getOrganization.ts'
import { OrganizationMemberDetails } from '../../../components/user/organization/member/OrganizationMemberDetails.tsx'

const VOrganizationMember = () => {
  const { memberId } = useParams()
  const memberQueryData = useGetOrganizationMember(memberId)
  return (
    <QueryWrapper query={memberQueryData}>
      {(_data: TOrganizationMember) => <OrganizationMemberDetails member={_data} />}
    </QueryWrapper>
  )
}

export default VOrganizationMember
