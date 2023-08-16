import { TextInput, TextInputProps } from '@mantine/core'
import { Controller } from 'react-hook-form'

type TInputTextProps = {
  name: string
  required?: boolean
} & Omit<TextInputProps, 'required'>

const InputText = ({ name, ...props }: TInputTextProps) => {
  return (
    <Controller
      name={name}
      render={({ field: { ref, value, ...field }, fieldState }) => {
        return (
          <TextInput
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

export default InputText
