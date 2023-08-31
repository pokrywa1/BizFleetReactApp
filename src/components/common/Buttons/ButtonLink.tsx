import { ButtonProps } from '@mantine/core'
import { Link, LinkProps } from 'react-router-dom'
import { Button } from './Button.tsx'

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
