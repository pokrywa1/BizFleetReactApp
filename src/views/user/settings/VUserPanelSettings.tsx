import { UserPanelSettingsChangePasswordForm } from '../../../components/user/settings/UserPanelSettingsChangePasswordForm.tsx'
import Title from '../../../components/common/Typography/Title.tsx'
import { Card, Divider } from '@mantine/core'

const VUserPanelSettings = () => {
  return (
    <Card>
      <Title order={2}>Zmiana hasła</Title>
      <Divider />
      <UserPanelSettingsChangePasswordForm />
    </Card>
  )
}
export default VUserPanelSettings
