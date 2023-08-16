import { ButtonProps } from '@mantine/core'
import Button from './Button.tsx'
import { Link, LinkProps } from 'react-router-dom'

type TButtonProps = {
  children: React.ReactNode
} & Partial<ButtonProps> &
  LinkProps
const ButtonLink = ({ to, children, ...props }: TButtonProps) => {
  return (
    <Link to={to}>
      <Button {...props}>{children}</Button>
    </Link>
  )
}

export default ButtonLink
