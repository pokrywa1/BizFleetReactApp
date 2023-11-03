import { useGetOrganizationMember } from '../../../app/api/user/organization/getOrganizationMember.ts'
import { useParams } from 'react-router-dom'

const VOrganizationMember = () => {
  const { memberId } = useParams()
  const queryData = useGetOrganizationMember(memberId)

  return (
    <div>
      <h1>Szczegóły konta</h1>
    </div>
  )
}

export default VOrganizationMember
