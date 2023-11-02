import useFormMutation from '../../../app/hook/useFormMutation.tsx'
import {
  postSignUp,
  signUpSchema,
  TSignUpFormFields,
  TSignUpFormResponse,
} from '../../../app/api/public/auth/postSignUp.ts'
import { Anchor, Button, Container, Group, Paper, Text, Title } from '@mantine/core'
import { FormProvider } from 'react-hook-form'
import InputText from '../../common/Inputs/InputText.tsx'
import InputPassword from '../../common/Inputs/InputPassword.tsx'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../../../app/router'
import toast from 'react-hot-toast'

const SignUp = () => {
  const navigate = useNavigate()

  const { methods, inputsNames, handleSubmit } = useFormMutation<
    TSignUpFormFields,
    TSignUpFormResponse
  >(signUpSchema, postSignUp, {
    onSuccess: () => {
      navigate(routes['auth.login'])
      toast.success('Rejestraca powiodła się')
    },
    onError: () => {
      toast.error('Nie udało się utworzyć konta')
    },
  })
  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Rejestracja
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Posiadadasz konto?{' '}
        <Anchor size="sm" component="button">
          <Link to={routes['auth.login']}>Zaloguj się</Link>
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit}>
            <InputText
              name={inputsNames.fullName}
              label="Imie i nazwisko"
              placeholder="Jan Kowalski"
            />
            <InputText name={inputsNames.username} label="Nazwa konta" placeholder="Kowalski123" />

            <InputText name={inputsNames.email} label="Email" placeholder="you@bizfleet.com" />
            <InputPassword
              name={inputsNames.password}
              label="Password"
              placeholder="Your password"
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

export default SignUp
