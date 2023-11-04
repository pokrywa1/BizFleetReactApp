import { TOrganizationMember } from '../../../../app/api/user/organization/getOrganization.ts'
import { Card, Group, Stack } from '@mantine/core'
import { DetailsCard } from '../../../common/Cards/DetailsCard.tsx'
import Title from '../../../common/Typography/Title.tsx'

type OrganizationMemberEssentialDataProps = {
  member: TOrganizationMember
}

export const OrganizationMemberEssentialData = ({
  member,
}: OrganizationMemberEssentialDataProps) => {
  return (
    <Card>
      <Stack>
        <Title order={2}>Informacje o pracowniku</Title>
        <Group>
          <DetailsCard name={'Pracownik'} value={member.fullName} />
          <DetailsCard name={'E-mail'} value={member.email} />
          <DetailsCard name={'Status'} value={member.role} />
        </Group>
      </Stack>
    </Card>
  )
}
