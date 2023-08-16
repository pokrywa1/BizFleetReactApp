import { Anchor, Paper, Title, Text, Container, Group, Button } from '@mantine/core'
import InputText from '../../common/Inputs/InputText.tsx'
import InputPassword from '../../common/Inputs/InputPassword.tsx'
const SignIn = () => {
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
        <InputText name={'email'} label="Email" placeholder="you@bizfleet.com" required />
        <InputPassword
          name={'password'}
          label="Password"
          placeholder="Your password"
          required
          mt="md"
        />
        <Group position="apart" mt="lg">
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl">
          Sign in
        </Button>
      </Paper>
    </Container>
  )
}

export default SignIn
