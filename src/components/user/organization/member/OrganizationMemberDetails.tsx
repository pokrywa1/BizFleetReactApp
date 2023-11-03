import { TOrganizationMember } from '../../../../app/api/user/organization/getOrganization.ts'
import { OrganizationMemberEssentialData } from './OrganizationMemberEssentialData.tsx'

type OrganizationMemberDetailsProps = {
  member: TOrganizationMember
}

export const OrganizationMemberDetails = ({ member }: OrganizationMemberDetailsProps) => {
  return (
    <>
      <OrganizationMemberEssentialData member={member} />
    </>
  )
}
