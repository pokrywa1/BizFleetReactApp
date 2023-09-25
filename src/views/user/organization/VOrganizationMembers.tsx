import { useGetOrganization } from '../../../app/api/user/organization/organization.ts'
import { QueryWrapper } from '../../../app/Query/Query.tsx'
import { OrganizationMemberDatatable } from '../../../components/user/organization/OrganizationMemberDatatable.tsx'

const VOrganizationMembers = () => {
  const queryData = useGetOrganization()
  return (
    <>
      <QueryWrapper query={queryData}>
        {(_data) => <OrganizationMemberDatatable members={_data} />}
      </QueryWrapper>
    </>
  )
}
export default VOrganizationMembers
