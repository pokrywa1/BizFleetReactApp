import useFormMutation from '../../../app/hook/useFormMutation.tsx'
import {
  changePasswordFormFields,
  changePasswordSchema,
  putChangePasswordForm,
} from '../../../app/api/user/settings/putChangePassword.ts'
import { FormProvider } from 'react-hook-form'
import InputPassword from '../../common/Inputs/InputPassword.tsx'
import { SimpleGrid, Stack } from '@mantine/core'
import { Button } from '../../common/Buttons/Button.tsx'
import { LuSave } from 'react-icons/lu'

export const UserPanelSettingsChangePasswordForm = () => {
  const { methods, inputsNames, handleSubmit } = useFormMutation<changePasswordFormFields, unknown>(
    changePasswordSchema,
    putChangePasswordForm,
    {
      onSuccess: () => console.log('Zmieniono'),
    },
  )
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit}>
        <Stack>
          <SimpleGrid mt={'xs'} cols={1} breakpoints={[{ minWidth: 'sm', cols: 3 }]}>
            <InputPassword name={inputsNames.password} placeholder={'Aktualne hasło'} />
            <InputPassword name={inputsNames.newPassword} placeholder={'Nowe hasło'} />
            <InputPassword name={inputsNames.confirmPassword} placeholder={'Powtórz hasło'} />
          </SimpleGrid>
          <Button type={'submit'} leftIcon={<LuSave />} w={'fit-content'} ml={'auto'} mt={'xs'}>
            Zapisz
          </Button>
        </Stack>
      </form>
    </FormProvider>
  )
}
