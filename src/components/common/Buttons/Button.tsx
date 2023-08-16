import { Button as MantineButton, ButtonProps } from '@mantine/core'

type TButtonProps = {
  children: React.ReactNode
} & Partial<ButtonProps>
const Button = ({ children, ...props }: TButtonProps) => {
  return <MantineButton {...props}>{children}</MantineButton>
}

export default Button
