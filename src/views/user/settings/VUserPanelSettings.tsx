import { UserPanelSettingsChangePasswordForm } from '../../../components/user/settings/UserPanelSettingsChangePasswordForm.tsx'
import { Card, Divider } from '@mantine/core'
import TitleWithSubtext from '../../../components/common/Typography/TitleWithSubtext.tsx'

const VUserPanelSettings = () => {
  return (
    <Card>
      <TitleWithSubtext
        title={'Zmiana hasła'}
        subtext={'Pamiętaj, aby twoje hasło było wystarczająco silne'}
        mb={'md'}
      />
      <Divider />
      <UserPanelSettingsChangePasswordForm />
    </Card>
  )
}
export default VUserPanelSettings
