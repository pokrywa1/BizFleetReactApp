import useFormMutation from '../../../app/hook/useFormMutation.tsx'
import {
  organizationMemberFormField,
  organizationMemberSchema,
  postOrganizationMember,
} from '../../../app/api/user/organization/postOrganizationMember.ts'
import { FormModal } from '../../common/modals/FormModal.tsx'
import InputText from '../../common/Inputs/InputText.tsx'

type OrganizationAddMemberModalProps = {
  onClose: () => void
  opened: boolean
}

export const OrganizationAddMemberModal = ({
  onClose,
  opened,
}: OrganizationAddMemberModalProps) => {
  const { methods, handleSubmit, inputsNames } = useFormMutation<
    organizationMemberFormField,
    unknown
  >(organizationMemberSchema, postOrganizationMember, {
    onSuccess: () => console.log('poszłoi'),
  })
  return (
    <>
      <FormModal
        methods={methods}
        onSubmit={handleSubmit}
        opened={opened}
        onClose={onClose}
        title={'Dodawania pracownika'}
      >
        <InputText name={inputsNames.fullName} placeholder={'Pełne imie'} />
        <InputText name={inputsNames.username} placeholder={'Nick'} />
        <InputText name={inputsNames.email} placeholder={'E-mail'} />
        <InputText name={inputsNames.role} placeholder={'Rola'} />
      </FormModal>
    </>
  )
}
