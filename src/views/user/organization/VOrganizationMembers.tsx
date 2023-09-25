import { useGetOrganization } from '../../../app/api/user/organization/getOrganization.ts'
import { QueryWrapper } from '../../../app/Query/Query.tsx'
import { OrganizationMemberDatatable } from '../../../components/user/organization/OrganizationMemberDatatable.tsx'
import { Group } from '@mantine/core'
import { Button } from '../../../components/common/Buttons/Button.tsx'
import { AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react'
import { OrganizationAddMemberModal } from '../../../components/user/organization/OrganizationAddMemberModal.tsx'

const VOrganizationMembers = () => {
  const queryData = useGetOrganization()
  const [openedModal, setOpenedModal] = useState(false)
  return (
    <>
      <Group>
        <Button onClick={() => setOpenedModal(true)} leftIcon={<AiOutlinePlus />}>
          Dodaj
        </Button>
      </Group>
      <QueryWrapper query={queryData}>
        {(_data) => <OrganizationMemberDatatable members={_data} />}
      </QueryWrapper>
      <OrganizationAddMemberModal opened={openedModal} onClose={() => setOpenedModal(false)} />
    </>
  )
}
export default VOrganizationMembers
