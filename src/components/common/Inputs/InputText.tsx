import { TextInput, TextInputProps } from '@mantine/core'
import { Controller, useFormContext } from 'react-hook-form'

type TInputTextProps = {
  name: string
  required?: boolean
} & Omit<TextInputProps, 'required'>

const InputText = ({ name, ...props }: TInputTextProps) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
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
