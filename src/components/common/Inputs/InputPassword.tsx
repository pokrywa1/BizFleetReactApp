import { PasswordInput, PasswordInputProps } from '@mantine/core'
import { Controller, useFormContext } from 'react-hook-form'

type TPasswordInput = {
  name: string
  required?: boolean
} & Omit<PasswordInputProps, 'required'>
const InputPassword = ({ name, ...props }: TPasswordInput) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { ref, value, ...field }, fieldState }) => {
        return (
          <PasswordInput
            ref={ref}
            {...props}
            {...field}
            value={value ?? ''}
            error={fieldState.error?.message}
          />
        )
      }}
    />
  )
}

export default InputPassword
