import { Anchor, Paper, Title, Text, Container, Button } from '@mantine/core'
import InputText from '../../common/Inputs/InputText.tsx'
import InputPassword from '../../common/Inputs/InputPassword.tsx'
import { FormProvider } from 'react-hook-form'
import {
  postSignIn,
  signInSchema,
  TSignInFormFields,
  TSignInFormResponse,
} from '../../../app/api/public/auth/postSigIn.tsx'

import useFormMutation from '../../../app/hook/useFormMutation.tsx'
import useUserStore from '../../../app/store/useUserStore.ts'
import useLocalStorage from '../../../app/hook/localStorage/useLocalStorage.ts'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../../../app/router'

const SignIn = () => {
  const [, setJwt] = useLocalStorage<string | null>('jwt', null)
  const { setUserAuth } = useUserStore()
  const navigate = useNavigate()
  const { handleSubmit, inputsNames, methods } = useFormMutation<
    TSignInFormFields,
    TSignInFormResponse
  >(signInSchema, postSignIn, {
    onSuccess: (data) => {
      if (data.accessToken) {
        setUserAuth(data)
        setJwt(data.accessToken)
        navigate(routes['user-panel.dashboard'])
      }
    },
  })

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
          <Link to={routes['auth.register']}>Utwórz konto</Link>
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
