import { Button as MantineButton, ButtonProps, createPolymorphicComponent } from '@mantine/core'
import { forwardRef } from 'react'

type TButtonProps = Partial<ButtonProps>
const _Button = forwardRef<HTMLButtonElement, TButtonProps>(({ children, ...others }, ref) => (
  <MantineButton component="button" ref={ref} {...others}>
    {children}
  </MantineButton>
))

_Button.displayName = '_Button'

export const Button = createPolymorphicComponent<'button', ButtonProps>(_Button)
