import { Anchor, Paper, Title, Text, Container, Group, Button } from '@mantine/core'
import InputText from '../../common/Inputs/InputText.tsx'
import InputPassword from '../../common/Inputs/InputPassword.tsx'
import { FormProvider, useForm } from 'react-hook-form'
import { postSignIn, signInSchema } from '../../../app/api/public/auth/postSigIn.tsx'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useMutation } from 'react-query'

const SignIn = () => {
  const methods = useForm<TSignInFormFields>({
    resolver: yupResolver(signInSchema),
  })

  const mutation = useMutation('auth.sigin', postSignIn)

  const onSubmit = methods.handleSubmit((data) => mutation.mutateAsync(data))

  type TSignInFormFields = yup.InferType<typeof signInSchema>

  const inputNames: (keyof TSignInFormFields)[] = Object.keys(
    signInSchema.fields,
  ) as (keyof TSignInFormFields)[]

  const inputNamesMap: Record<keyof TSignInFormFields, string> = inputNames.reduce(
    (map, fieldName) => {
      map[fieldName] = fieldName
      return map
    },
    {} as Record<keyof TSignInFormFields, string>,
  )

  console.log(inputNamesMap) // 'email'
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
            <InputPassword name={'password'} label="Password" placeholder="Your password" mt="md" />
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
