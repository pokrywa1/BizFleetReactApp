import { Anchor, Paper, Title, Text, Container, Group, Button } from '@mantine/core'
import InputText from '../../common/Inputs/InputText.tsx'
import InputPassword from '../../common/Inputs/InputPassword.tsx'
import { FormProvider } from 'react-hook-form'
import {
  postSignIn,
  signInSchema,
  TSignInFormFields,
} from '../../../app/api/public/auth/postSigIn.tsx'

import useFormMutation from '../../../app/hook/useFormMutation.tsx'

const SignIn = () => {
  const { handleSubmit, inputsNames, methods } = useFormMutation<TSignInFormFields>(
    signInSchema,
    postSignIn,
  )

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Witamy ponownie
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Nie masz jeszcze konta?{' '}
        <Anchor size="sm" component="button">
          Utwórz konto
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit}>
            <InputText name={inputsNames.email} label="Email" placeholder="you@bizfleet.com" />
            <InputPassword
              name={inputsNames.password}
              label="Password"
              placeholder="Your password"
              mt="md"
            />
            <Group position="apart" mt="lg">
              <Anchor component="button" size="sm">
                Forgot password?
              </Anchor>
            </Group>
            <Button type={'submit'} fullWidth mt="xl">
              Sign in
            </Button>
          </form>
        </FormProvider>
      </Paper>
    </Container>
  )
}

export default SignIn
