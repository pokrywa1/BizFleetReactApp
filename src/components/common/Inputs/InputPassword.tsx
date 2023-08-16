import { PasswordInput, PasswordInputProps } from '@mantine/core'

type TPasswordInput = {
  name: string
} & PasswordInputProps
const InputPassword = ({ ...props }: TPasswordInput) => {
  return <PasswordInput {...props} />
}

export default InputPassword
