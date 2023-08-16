import { Anchor, Paper, Title, Text, Container, Group, Button } from '@mantine/core'
import InputText from '../../common/Inputs/InputText.tsx'
import InputPassword from '../../common/Inputs/InputPassword.tsx'
import { FormProvider, useForm } from 'react-hook-form'
import { signInSchema, TSignInFormFields } from '../../../app/api/public/auth/postSigIn.tsx'
import { yupResolver } from '@hookform/resolvers/yup'
const SignIn = () => {
  const methods = useForm<TSignInFormFields>({
    resolver: yupResolver(signInSchema),
  })
  const onSubmit = methods.handleSubmit((data) => console.log(data))

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
          <form onSubmit={onSubmit}>
            <InputText name={'email'} label="Email" placeholder="you@bizfleet.com" />
            {/*<InputPassword*/}
            {/*  name={'password'}*/}
            {/*  label="Password"*/}
            {/*  placeholder="Your password"*/}
            {/*  required*/}
            {/*  mt="md"*/}
            {/*/>*/}
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
